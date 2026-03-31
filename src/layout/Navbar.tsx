import { Button } from "@/components/Button"
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type NavLink = {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  {href: '#about', label: 'About'},
  {href: '#projects', label: 'Projects'},
  {href: '#experience', label: 'Experience'},
  {href: '#testimonials', label: 'Testimonials'},
]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href='#' className='text-xl font-bold tracking-tight hover:text-primary'>
          TH<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className='hidden md:block'>
          <Button size='sm'>Contact Me</Button>
        </div>

        {/* Mobile button */}
        <button 
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className='md:hidden p-2 text-foreground cursor-pointer'>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && ( 
        <div className='md:hidden glass-strong'>
          <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
            {navLinks.map((link, index) => (
              <a 
                href={link.href} 
                key={index} 
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button size='sm'>Contact Me</Button>
          </div>
        </div>
      )}
      
    </header>
  )

}