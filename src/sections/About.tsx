import { Code2, Lightbulb, Rocket, Users } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    desc: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Staying ahead with the latest technologies and best practices.",
  },
]

export const About = () => {
  return (
    <section id='about' className='relative overflow-hidden'>
      <div className='pt-24 container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* left column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
            </div>
        
            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
              Building the future,
              <span className='font-serif italic font-normal text-white'> one component at a time.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I got my start in web development in the early 2000s, teaching myself how to build websites for my bands. What began as a creative outlet quickly turned into a long-term career. One built on curiosity, problem-solving, and a genuine interest in how people interact with the web. 
              </p>
              <p>
                Since I started working for professional agencies over 15 years ago, I've worked across the full stack to build, maintain, and improve a wide range of1 websites and applications. Much of my experience is in Drupal, but my work extends beyond any single technology. Spanning PHP, modern frontend frameworks like Next.js, and everything in between. I'm especially drawn to the challenge of improving performance, fixing complex issues, and making things more stable and easier to use. 
              </p>
              <p>
                I care about building websites that hold up over time—for both the people using them and the teams maintaining them. That means focusing on performance, accessibility, and clean, intuitive content editing experiences. Whether I'm developing new features or troubleshooting a tricky bug, my goal is always the same: leave the system better than I found it.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I focus on building digital experiences that are not only functional, but reliable, maintainable, and genuinely enjoyable to use, both for users and the teams behind them."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}