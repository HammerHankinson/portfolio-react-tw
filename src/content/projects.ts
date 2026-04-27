export type Project = {
  title: string
  desc: string
  images: string[]
  fullPageImage: string | null
  tags: string[]
  link: string | null
}

export const projects: Project[] = [
  {
    title: 'Proofpoint',
    desc: 'A large enterprise Drupal web application for Proofpoint, rebuilt from the ground up after being inherited on Drupal 7 and maintained through successive upgrades from Drupal 8 to Drupal 11. I worked as part of a small engineering team responsible for rebuilding in Drupal 8, multiple redesins, ongoing feature development, maintenance, and platform modernization.\n\nThe application used Pattern Lab and extensive Twig-based component theming to support a large-scale multilingual marketing and content platform. It also included 40+ custom Drupal modules ranging from simple editorial tools and custom blocks to third-party integrations, multilingual and SEO functionality, custom entities, complex content workflows, migration tooling, search enhancements, and CDN/cache management.\n\nThe project also used CircleCI for CI/CD and Percy for visual regression testing. It remains one of the most complex software engineering projects I have worked on, combining frontend architecture, Drupal backend development, content modeling, integrations, testing, deployment automation, and long-term platform maintenance.',
    images: ['/projects/pfpt-homepage.png', '/projects/pfpt/pfpt-nav.png', '/projects/pfpt/pfpt-resource-library.png'],
    fullPageImage: '/projects/pfpt/pfpt-homepage-full.png',
    tags: ['Drupal', 'PHP', 'Twig', 'JavaScript', 'Algolia', 'PatternLab', 'Circle CI', 'Git', 'GitHub', 'SCSS', 'Platform.sh', 'Percy'],
    link: 'https://www.proofpoint.com/us',
  },
  {
    title: 'Denver Health Medical Plan',
    desc: 'Drupal-based platform for a nonprofit health insurance provider where I led development, maintaining and evolving the site from Drupal 8 through Drupal 11. I owned nearly all front-end and back-end development, including a full theme rebuild to remove Bootstrap bloat and significantly improve performance. Key work included building a centralized, Algolia-powered resource library and restructuring the CMS to give non-technical editors far more control. The result was faster page loads, improved accessibility, and a much more efficient content publishing workflow.',
    images: ['/projects/dhmp-homepage.png'],
    fullPageImage: '/projects/dhmp/dhmp-homepage.png',
    tags: ['Drupal', 'PHP', 'Twig', 'JavaScript', 'Algolia', 'SCSS', 'Gulp', 'Git', 'GitHub Actions', 'DDEV', 'Figma', 'D8 -> D11', 'Acquia', 'Composer', 'Drush', 'CI/CD', 'Custom Theming', 'WCAG 2.1', 'CMS', 'Component-based Design'],
    link: 'https://www.denverhealthmedicalplan.org/',
  },
  {
    title: 'Upwing Energy',
    desc: 'A decoupled marketing website using Drupal as a headless CMS and Next.js for the frontend, deployed on Platform.sh with GitHub Actions for CI/CD. I contributed across both backend and frontend, developing Drupal integrations, API-driven content structures, and reusable UI components. I implemented multiple features including a custom site search feature that required coordinating backend data exposure with frontend querying and display logic. The project enabled flexible content management for non-technical users while delivering a modern, performant user experience.',
    images: ['/projects/upwing-homepage.png'],
    fullPageImage: '/projects/upwing/upwing-homepage.png',
    tags: ['Drupal', 'PHP', 'NextJs', 'SCSS', 'Git', 'Github Actions', 'Platform.sh', 'DDEV', 'Figma', 'D8 -> D11', 'Composer', 'Drush', 'CMS'],
    link: 'https://www.upwingenergy.com/',
  },
  {
    title: 'Calnetix Energy',
    desc: 'A decoupled marketing website using Drupal as a headless CMS and Next.js for the frontend. The architecture separated concerns across platforms, with Drupal hosted on Acquia and the Next.js application deployed on Heroku. As a full-stack developer, I worked across both backend and frontend, building content models, API integrations, and reusable UI components. This setup provided scalable content management for the client while delivering a fast, modern frontend experience.',
    images: ['/projects/calnetix-homepage.png'],
    fullPageImage: '/projects/calnetix/calnetix-homepage.png',
    tags: ['Drupal', 'PHP', 'NextJs', 'SCSS', 'Git', 'Acquia', 'Heroku', 'DDEV', 'Figma', 'D8 -> D11', 'Acquia', 'Composer', 'Drush', 'CMS'],
    link: 'https://www.calnetix.com/',
  },
  {
    title: 'Alpha & Omega Semiconductor',
    desc: 'A decoupled web application using Drupal as a headless CMS and Next.js for the frontend, all managed within a single Git repository, using GitHub Actions for CI/CD, and hosted on Upsun (Platform.sh). I contributed across both backend and frontend, including Drupal content modeling, core/module updates, and development of reusable Next.js components. Led development of many key site sections such as the newsroom, while also supporting complex features like a custom product catalog with parametric search. Focused on improving content editor experience and maintaining a scalable architecture capable of handling large, structured product data. Resulted in a high-performance application with fast load times and flexible content management.',
    images: ['/projects/aos-homepage.png'],
    fullPageImage: '/projects/aos/aos-homepage.png',
    tags: ['Drupal', 'PHP', 'NextJs', 'SCSS', 'Algolia', 'Git', 'Github Actions', 'Platform.sh'],
    link: 'https://www.aosmd.com',
  },
  {
    title: 'SiTime',
    desc: 'Drupal-based product and commerce platform for SiTime, a semiconductor company specializing in precision timing solutions. I worked across a heavily customized Drupal 8->10 codebase, including custom content types, paragraph based page building, taxonomy structures, product data models, and a bespoke frontend theme. Key work included supporting a product/part finder, gated resource downloads, Algolia-powered search, newsroom/resource imports, and editor-friendly content management tools. The result was a flexible marketing and product platform that connected technical product data, commerce workflows, and content publishing into a unified Drupal experience',
    images: ['/projects/sitime-homepage.png'],
    fullPageImage: '/projects/sitime/sitime-homepage.png',
    tags: ['Drupal', 'PHP', 'Twig', 'JavaScript', 'Algolia'],
    link: 'https://www.sitime.com/',
  },
  {
    title: 'Cupertino Electric',
    desc: 'A decoupled web application built with Drupal as a headless CMS and a custom Next.js/Express frontend, designed to deliver a fast, scalable marketing experience powered by structured content. The Drupal backend includes a custom decoupling layer that transforms content into clean, cacheable JSON, handling routing, redirects, access control, multilingual support, and normalization of complex entities such as media, paragraphs, and taxonomy. On the frontend, a server-rendered React architecture consumes this data to dynamically generate pages through reusable components, supporting rich features like animated transitions, media-heavy layouts, project listings with mapping integrations, advanced search/filtering, and seamless webform handling. Together, the system balances a flexible editorial experience with a performant, modern frontend, enabling efficient content management and a polished user experience.',
    images: ['/projects/cei-homepage.png'],
    fullPageImage: '/projects/cei-homepage.png',
    tags: ['Drupal', 'PHP', 'Twig', 'JavaScript', 'Algolia'],
    link: 'https://www.cei.com',
  },
  {
    title: 'This Portfolio',
    desc: 'A straightforward single-page portfolio application built with React and Tailwind CSS. I kept the stack intentionally lightweight instead of reaching for a heavier CMS like Drupal, since the project only needed a fast, focused frontend experience. The goal was to showcase selected work while sharpening my React, component architecture, responsive layout, and utility-first styling skills in a clean production-ready application.',
    images: ['/projects/portfolio-screenshot.png'],
    fullPageImage: '',
    tags: ['React', 'Tailwind CSS'],
    link: null,
  },
]
