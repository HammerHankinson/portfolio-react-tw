import { useEffect } from 'react'
import { Navbar } from '@/layout/Navbar'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Testimonials } from '@/sections/Testimonials'
import { Contact } from '@/sections/Contact'


function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.animate-fade-in')

    if (!elements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return <div className='min-h-screen overflow-x-hidden'>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  </div>
}

export default App
