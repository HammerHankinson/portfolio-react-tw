import { AnimatedBorderButton } from '@/components/AnimatedBorderButton'
import type { Project } from '@/content/projects'
import { projects } from '@/content/projects'
import { ArrowUpRight, ChevronLeft, ChevronRight, Info } from 'lucide-react'
import { useState } from 'react'

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const images = project.images.filter(Boolean)
  const imageCount = images.length
  const hasCarousel = imageCount > 1
  const activeImage = imageCount ? images[activeImageIdx] : null

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

  return (
    <article
      className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      <div className='relative overflow-hidden aspect-video bg-surface'>
        {activeImage ? (
          <img
            src={activeImage}
            alt={`${project.title} screenshot ${activeImageIdx + 1}`}
            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center bg-linear-to-br from-surface to-card px-6 text-center'>
            <div>
              <p className='text-xs font-medium uppercase tracking-[0.3em] text-primary/80'>Project Preview</p>
              <h3 className='mt-3 text-2xl font-semibold text-secondary-foreground'>{project.title}</h3>
            </div>
          </div>
        )}

        <div className='absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent opacity-70' />

        {hasCarousel && (
          <>
            <div className='pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4'>
              <button
                type='button'
                aria-label={`Show previous ${project.title} screenshot`}
                onClick={showPrevious}
                className='pointer-events-auto rounded-full glass p-3 text-foreground transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-primary/10 hover:text-primary'
              >
                <ChevronLeft className='h-5 w-5' />
              </button>
              <button
                type='button'
                aria-label={`Show next ${project.title} screenshot`}
                onClick={showNext}
                className='pointer-events-auto rounded-full glass p-3 text-foreground transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-primary/10 hover:text-primary'
              >
                <ChevronRight className='h-5 w-5' />
              </button>
            </div>

            <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-background/35 px-3 py-2 backdrop-blur-sm'>
              {images.map((_, imageIndex) => (
                <button
                  key={`${project.title}-image-${imageIndex}`}
                  type='button'
                  aria-label={`Show ${project.title} screenshot ${imageIndex + 1}`}
                  onClick={() => setActiveImageIdx(imageIndex)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    imageIndex === activeImageIdx
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-foreground/35 hover:bg-foreground/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className='p-6 space-y-4'>
        <div className='flex items-start justify-between gap-4'>
          <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
            {project.title}
          </h3>
          <ArrowUpRight
            className='mt-1 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'
          />
        </div>

        <div className='flex flex-wrap gap-3'>
          <a
            href={project.link}
            className='inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary'
          >
            Visit Project
            <ArrowUpRight className='h-4 w-4' />
          </a>
          <a
            href={project.info}
            className='inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary'
          >
            More Info
            <Info className='h-4 w-4' />
          </a>
        </div>

        <p className='text-sm text-muted-foreground'>
          {project.desc}
        </p>

        <div className='flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <span
              key={`${project.title}-${tag}`}
              className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export const Projects = () => {
  return (
    <section id='projects' className='py-24 relative overflow-hidden'>
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Projects that
            <span className='font-serif italic font-normal text-white'> make an impact.</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
        </div>

        {/* projects grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        {/* View all CTA */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className='w-5 h-5' />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}
