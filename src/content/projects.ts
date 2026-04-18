export type Project = {
  title: string
  desc: string
  images: string[]
  tags: string[]
  link: string
  info: string
}

export const projects: Project[] = [
  {
    title: 'Proofpoint',
    desc: 'Drupal-based platform for a nonprofit health insurance provider where I led development, maintaining and evolving the site from Drupal 8 through Drupal 11. I owned nearly all front-end and back-end development, including a full theme rebuild to remove Bootstrap bloat and significantly improve performance. Key work included building a centralized, Algolia-powered resource library and restructuring the CMS to give non-technical editors far more control. The result was faster page loads, improved accessibility, and a much more efficient content publishing workflow.',
    images: ['/projects/pfpt-homepage.png', '/projects/pfpt/pfpt-nav.png', '/projects/pfpt/pfpt-resource-library.png'],
    tags: ['Drupal', 'PHP', 'Twig', 'JavaScript', 'Algolia', 'PatternLab', 'Circle CI', 'Git', 'GitHub', 'SCSS', 'Platform.sh'],
    link: 'https://www.proofpoint.com/us',
    info: '#'
  },
  {
    title: 'Denver Health Medical Plan',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    images: ['/projects/dhmp-homepage.png'],
    tags: ['Drupal', 'PHP', 'Twig', 'JavaScript', 'Algolia', 'SCSS', 'Gulp', 'Git', 'GitHub Actions', 'DDEV', 'Figma', 'D8 -> D11', 'Acquia', 'Composer', 'Drush', 'CI/CD', 'Custom Theming', 'WCAG 2.1', 'CMS', 'Component-based Design'],
    link: 'https://www.denverhealthmedicalplan.org/',
    info: '#'
  },
  {
    title: 'Upwing Energy',
    desc: 'A decoupled marketing website for Upwing Energy using Drupal as a headless CMS and Next.js for the frontend, deployed on Platform.sh. As a full-stack developer, I contributed across both backend and frontend, developing Drupal integrations, API-driven content structures, and reusable UI components. I implemented multiple features including a custom site search feature that required coordinating backend data exposure with frontend querying and display logic. The project enabled flexible content management for non-technical users while delivering a modern, performant user experience.',
    images: ['/projects/upwing-homepage.png'],
    tags: ['Drupal', 'PHP', 'NextJs', 'SCSS', 'Git', 'Github Actions', 'Platform.sh', 'DDEV', 'Figma', 'D8 -> D11', 'Composer', 'Drush', 'CMS'],
    link: 'https://www.upwingenergy.com/',
    info: '#'
  },
  {
    title: 'Calnetix Energy',
    desc: 'A decoupled marketing website for Calnetix Energy using Drupal as a headless CMS and Next.js for the frontend. The architecture separated concerns across platforms, with Drupal hosted on Acquia and the Next.js application deployed on Heroku. As a full-stack developer, I worked across both backend and frontend, building content models, API integrations, and reusable UI components. This setup provided scalable content management for the client while delivering a fast, modern frontend experience.',
    images: ['/projects/calnetix-homepage.png'],
    tags: ['Drupal', 'PHP', 'NextJs', 'SCSS', 'Git', 'Acquia', 'Heroku', 'DDEV', 'Figma', 'D8 -> D11', 'Acquia', 'Composer', 'Drush', 'CMS'],
    link: 'https://www.calnetix.com/',
    info: '#'
  },
  {
    title: 'Alpha & Omega Semiconductor',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    images: ['/projects/aos-homepage.png'],
    tags: ['Drupal', 'PHP', 'NextJs', 'SCSS', 'Algolia', 'Git', 'Github Actions', 'Platform.sh'],
    link: '#',
    info: '#'
  },
  {
    title: 'SiTime',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    images: ['/projects/sitime-homepage.png'],
    tags: ['Drupal', 'PHP', 'Twig', 'JavaScript', 'Algolia'],
    link: '#',
    info: '#'
  },
  {
    title: 'Cupertino Electric',
    desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
    images: ['/projects/cei-homepage.png'],
    tags: ['Drupal', 'PHP', 'Twig', 'JavaScript', 'Algolia'],
    link: '#',
    info: '#'
  },
]
