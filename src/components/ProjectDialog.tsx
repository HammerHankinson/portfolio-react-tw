import type { Project } from '@/content/projects'
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type ProjectDialogProps = {
  project: Project | null
  onClose: () => void
}

export const ProjectDialog = ({ project, onClose }: ProjectDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const screenshotRef = useRef<HTMLDivElement>(null)
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const isOpen = Boolean(project)
  const fullPageImages = project?.fullPageImages.filter(Boolean) ?? []
  const imageCount = fullPageImages.length
  const hasCarousel = imageCount > 1
  const activeImage = imageCount ? fullPageImages[activeImageIdx] : null

  const showPrevious = () => {
    if (!hasCarousel) {
      return
    }

    setActiveImageIdx((prev) => (prev - 1 + imageCount) % imageCount)
  }

  const showNext = () => {
    if (!hasCarousel) {
      return
    }

    setActiveImageIdx((prev) => (prev + 1) % imageCount)
  }

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) {
      return
    }

    if (isOpen && !dialog.open) {
      dialog.showModal()
      return
    }

    if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  useEffect(() => {
    screenshotRef.current?.scrollTo({ top: 0 })
  }, [activeImageIdx, project?.title])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={project ? 'project-dialog-title' : undefined}
      className='project-dialog glass-strong m-auto w-[calc(100%-2rem)] max-w-5xl rounded-2xl p-0 text-foreground shadow-2xl shadow-background/70'
      onCancel={onClose}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          onClose()
        }
      }}
    >
      {project && activeImage && (
        <div className='max-h-[calc(100dvh-2rem)] overflow-hidden p-4 sm:p-5'>
          <div className='mb-4 flex items-center justify-between gap-4'>
            <h3 id='project-dialog-title' className='text-lg font-semibold text-secondary-foreground sm:text-xl'>
              {project.title}
            </h3>
            <button
              type='button'
              aria-label={`Close ${project.title} screenshot`}
              onClick={onClose}
              className='shrink-0 rounded-full border border-border/70 bg-surface p-2 text-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
            >
              <X className='h-5 w-5' />
            </button>
          </div>

          <div className='relative'>
            <div
              ref={screenshotRef}
              className='aspect-10/16 md:aspect-16/10 overflow-y-auto rounded-xl border border-border/70 bg-background/80'
            >
              <img
                src={activeImage}
                alt={`${project.title} full-page screenshot ${activeImageIdx + 1}`}
                loading='lazy'
                decoding='async'
                className='h-auto w-full'
              />
            </div>

            <div className='pointer-events-none absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center justify-center bg-black/50 px-1 pt-1'>
              <span className='text-xs uppercase tracking-wider'>Scroll</span>
              <ChevronDown className='h-6 w-6 animate-bounce' />
            </div>
          </div>

          {hasCarousel && (
            <div className='mt-5 flex items-center justify-center gap-4'>
              <button
                type='button'
                aria-label={`Show previous ${project.title} full-page screenshot`}
                onClick={showPrevious}
                className='rounded-full glass p-3 text-foreground transition-all bg-primary/30 hover:bg-primary/50 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
              >
                <ChevronLeft className='h-5 w-5' />
              </button>

              <div className='flex gap-2'>
                {fullPageImages.map((image, imageIndex) => (
                  <button
                    key={`${project.title}-full-page-image-${image}`}
                    type='button'
                    aria-label={`Show ${project.title} full-page screenshot ${imageIndex + 1}`}
                    onClick={() => setActiveImageIdx(imageIndex)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      imageIndex === activeImageIdx
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <button
                type='button'
                aria-label={`Show next ${project.title} full-page screenshot`}
                onClick={showNext}
                className='rounded-full glass p-3 text-foreground transition-all bg-primary/30 hover:bg-primary/50 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
              >
                <ChevronRight className='h-5 w-5' />
              </button>
            </div>
          )}
        </div>
      )}
    </dialog>
  )
}
