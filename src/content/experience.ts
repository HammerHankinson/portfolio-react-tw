export type Experience = {
  period: string
  role: string
  company: string
  desc: string
  technologies: Array<string>
  current: boolean
}

export const experiences: Experience[] = [
  {
    period: 'Jan 2019 - March 2026',
    role: 'Senior Full Stack Web Developer',
    company: 'Chronos Interactive Media',
    desc: 'Lorum Ipsum',
    technologies: ['Drupal', 'PHP'],
    current:false,
  },
  {
    period: 'Nov 2013 - Jan 2019',
    role: 'Web Developer',
    company: 'Chronos Interactive Media',
    desc: 'Lorum Ipsum',
    technologies: ['Drupal', 'PHP'],
    current:false,
  },
  {
    period: 'Apr 2011 - Aug 2013',
    role: 'Web Dev Assistant transitioned to Lead Web Developer',
    company: 'Page 1 Solutions',
    desc: 'Lorum Ipsum',
    technologies: ['Drupal', 'PHP', 'Wordpress'],
    current: false
  },
  {
    period: 'June 2009 - Apr 2011',
    role: 'Freelance Developer',
    company: 'Myself',
    desc: 'Lorum Ipsum',
    technologies: ['Drupal', 'PHP'],
    current:false,
  },
  {
    period: 'Sept 2008 - June 2009',
    role: 'Student - Web Development and Design',
    company: 'The Art Institute of Pittsburgh Online',
    desc: 'Lorum Ipsum',
    technologies: ['Drupal', 'PHP'],
    current:false,
  },
  
  
]