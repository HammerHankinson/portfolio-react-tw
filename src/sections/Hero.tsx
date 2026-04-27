import type { SVGProps } from 'react';
import {
  ArrowRight,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import { Button } from '@/components/Button';

const skills = [
  "Drupal",
  "PHP",
  "HTML5",
  "CSS3",
  "SCSS",
  "JavaScript",
  "jQuery",
  "TypeScript",
  "React",
  "Next.Js",
  'Tailwind',
  "MySQL",
  "Git",
  "GitHub",
  'Drush',
  'Docker',
  'Composer',
  "Percy",
  "CI/CD Integration",
  "Open Ai Codex",
  "Anthropic Claude",
  "Wordpress",
  "Strapi"
]


export const Hero = () => {
  return (
    <section className='relative min-h-screen flex item-center overflow-hidden'>
     <div className='absolute inset-0'>
      <img src='/hero-bg-2.png' alt='hero image' className='w-full h-full object-cover opacity-70' />
        <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background'></div>
     </div>

     <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {[...Array(30)].map((_, idx) => (
        <div 
          key={idx}
          className='absolute w-1.5 h-1.5 rounded-full opcacity-60' 
          style={{
            backgroundColor: 'var(--color-primary)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}  
        />
      ))}
     </div>
    
      <div className='container mx-auto px-6 pt-32 pb-16 relateve z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass bg-primary/10 text-sm text-primary '>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
                Full Stack Developer / Drupal Specialist
              </span>
            </div>

            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                Building and maintaining<br/> 
                <span className='text-primary glow-text'>fast, reliable</span>
                <br />
                web <span className='font-serif italic font-normal text-white'>experiences.</span>
              </h1>

              <p className='text-lg text-muted-foreground mx-w-lg animate-fade-in animation-delay-200'>Full-stack developer with 15+ years of professional industry experience building and maintaining complex web applications, with a focus on performance, accessibility, and long-term stability across both backend systems like Drupal and modern frontend frameworks like NextJs.</p>
            </div>

            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
              <Button 
                size='lg'
                className='bg-primary/70'
                onClick={() => {document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });}}
              >
                My Work <ArrowRight className='w-5 h-5' />
              </Button>

              <AnimatedBorderButton href="/TH-dev-resume.pdf" download="TH-dev-resume.pdf">
                <Download className="w-5 h-5" />
                Resume
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { 
                  name: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/timhankinson/',
                  icon: (props: SVGProps<SVGSVGElement>) => (
                    <svg fill='currentColor' viewBox='0 0 448 512' {...props}>
                      <path 
                        fill='currentColor' 
                        d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'>
                      </path>
                    </svg>
                  )
                },
                { 
                  name: 'GitHub',
                  href: 'https://github.com/HammerHankinson',
                  icon: (props: SVGProps<SVGSVGElement>) => (
                    <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                      <path 
                        fillRule='evenodd' 
                        d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' 
                        clipRule='evenodd'>
                      </path>
                    </svg>
                  ) 
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div> 
          </div>

          <div className='relative animate-fade-in animation-delay-300'>
            <div className='relative max-w-md mx-auto'>
              <div className='absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse' />
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src='/ai_headshot.png' alt='Timmah' className='w-full aspect-4/5 object-cover rounded-2xl opacity-90' />

                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-2xl font-bold text-primary'>15+</div>
                  <div className='text-xs text-muted-foreground'>Years <br />Professional<br/>Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className='mt-20 animate-fade-in animate-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
          <div className='relative overdflow-hidden'>
            <div className='flex animate-marquee'>
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className='shrink-0 px-8 py-4'>
                  <span className='text-xl font-semibod text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-20'>
        <a 
          href='#about'
          className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group'
        >
          <span className='text-xs uppercase tracking-wider'>Scroll</span>
          <ChevronDown className='2-6 h-6 animate-bounce' />
        </a>
      </div> */}
    </section>
  )
}
