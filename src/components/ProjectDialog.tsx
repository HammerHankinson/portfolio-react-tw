import type { Project } from '@/content/projects'
import { ChevronDown, X } from 'lucide-react'
import { useEffect, useRef } from 'react'

type ProjectDialogProps = {
  project: Project | null
  onClose: () => void
}

export const ProjectDialog = ({ project, onClose }: ProjectDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const isOpen = Boolean(project)
  const fullPageImage = project?.fullPageImage

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
      {project && fullPageImage && (
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

          <div className='aspect-10/16 md:aspect-16/10 overflow-y-auto rounded-xl border border-border/70 bg-background/80'>
            <img
              src={fullPageImage}
              alt={`${project.title} full-page screenshot`}
              loading='lazy'
              decoding='async'
              className='h-auto w-full'
            />
          </div>
        </div>
      )}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center flex-col bg-black/20 px-1 pt-1'>
        <span className='text-xs uppercase tracking-wider'>Scroll</span>
        <ChevronDown className='2-6 h-6 animate-bounce' />
      </div> 
    </dialog>
  )
}
