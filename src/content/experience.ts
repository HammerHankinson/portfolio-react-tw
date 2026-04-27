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
    desc: 'Supported development and long-term maintenance across multiple enterprise and mid-scale websites, working on both backend and frontend to build scalable, high-performing applications. Contributed to decoupled architectures using Drupal and modern frontend frameworks like Next.js, while improving performance, accessibility, and long-term maintainability. Regularly collaborated across teams, supported CI/CD workflows, and helped guide technical decisions across a wide range of client projects.',
    technologies: ['Drupal', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'Typescript', 'React', 'Next.Js', 'Git', 'GitHub', 'CI/CD', 'Wordpress', 'Strapi', 'Acquia', 'Upsun', 'Pantheon'],
    current:false,
  },
  {
    period: 'Nov 2013 - Jan 2019',
    role: 'Web Developer',
    company: 'Chronos Interactive Media',
    desc: 'Built and maintained Drupal websites across both frontend and backend, contributing to Drupal migrations, reusable theming systems, and deployment workflows across modern hosting environments.',
    technologies: ['Drupal', 'PHP', 'Wordpress', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Git', 'GitHub'],
    current:false,
  },
  {
    period: 'Apr 2011 - Aug 2013',
    role: 'Web Dev Assistant → Lead Web Developer',
    company: 'Page 1 Solutions',
    desc: 'Advanced from Web Developer Assistant to Lead Front-End Developer, delivering responsive Drupal and WordPress sites using HTML, SCSS, JavaScript, and PHP while supporting CMS features, configuration and troubleshooting.',
    technologies: ['Drupal', 'PHP', 'Wordpress', 'HTML', 'CSS', 'JavaScript', 'jQuery',],
    current: false
  },
  {
    period: 'June 2009 - Apr 2011',
    role: 'Freelance Developer',
    company: 'Myself',
    desc: 'Spent two years after school freelancing and building personal projects, creating websites for bands and small clients with HTML, CSS, and Flash while experimenting with animation and interactive design.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'Wordpress', 'MySQL', 'Flash', 'ActionScript'],
    current:false,
  },
  {
    period: 'Sept 2008 - June 2009',
    role: 'Student - Web Development and Design',
    company: 'The Art Institute of Pittsburgh Online',
    desc: 'I completed a Web Design & Development program through the Art Institute of Pittsburgh, where I built a foundation in design, front-end and some back-end development, and user-focused digital experiences through hands-on, portfolio-driven projects.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'MySQL', 'Flash', ],
    current:false,
  },
  
  
]