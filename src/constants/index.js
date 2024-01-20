import {
  frontend,
  ux,
  javascript,
  typescript,
  html,
  css,
  sass,
  reactjs,
  bootstrap,
  firebase,
  nodejs,
  git,
  figma,
  hotelHaven,
  battleRockets,
  sportSeeker,
  travelAgency,
  virtualMuseum,
  juno,
  mcgill,
  irb
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'SASS',
    icon: sass,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },  
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  }
];

const experiences = [
  {
    title: 'Bachelor of Arts Degree',
    company_name: 'McGill University',
    icon: mcgill,
    iconBg: '#333333',
    date: 'Aug 2012 - May 2017',
  },
  {
    title: 'Administrative Assistant/Registry Support Officer',
    company_name: 'Immigration and Refugee Board of Canada',
    icon: irb,
    iconBg: '#FFFFFF',
    date: 'June 2017 - June 2023',
  },  
  {
    title: 'Web Development Immersive Certificate',
    company_name: 'Juno College of Technology',
    icon: juno,
    iconBg: '#333333',
    date: 'November 2022 - July 2023',
  },
  {
    title: 'Supervisor - Scheduling Unit',
    company_name: 'Immigration and Refugee Board of Canada',
    icon: irb,
    iconBg: '#FFFFFF',
    date: 'June 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Hotel Haven',
    description: 'A sleek, React Bootstrap application that allows users to explore a diverse array of stunning vacation properties across a multitude of global destinations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'yellow-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
       {
        name: 'restapi',
        color: 'green-text-gradient',
      },
    ],
    image: hotelHaven,
    repo: 'https://github.com/ZCrooks/hotel-haven/',
    demo: 'https://hotel-haven-booking.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Protips Landing Page',
    description:
      'SaaS landing page for a travel agency built in React. Implemented a newsletter subscription field using Firebase firestore, as well as user sign-up/login functionality using Firebase Authentication.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'firebase',
        color: 'red-text-gradient',
      }
    ],
    image: travelAgency,
    repo: 'https://github.com/ZCrooks/protips-landing-page',
    demo: 'https://protips-landingpage-zach.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Battle Rockets',
    description: 'Designed and developed a Battleship game using React. Fully interactive experience which allows users to engage in a turn-based battle against their computer opponent.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: battleRockets,
    repo: 'https://github.com/ZCrooks/project4-battle-rockets',
    demo: 'https://battlerockets-game.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Virtual Museum',
    description: `Virtual Art Gallery built with data sourced from the Cleveland Museum of Art's 37,000+ item online collection. Allows user to view a carousel scroll of up to ten completely random items from any chosen department's collection of masterpieces.`,
    tags: [
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
    ],
    image: virtualMuseum,
    repo: 'https://github.com/ZCrooks/zachsMuseum',
    demo: 'https://zachs-museum.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Sport Seeker',
    description:
      'A single-page application that allows you to quickly view all sporting event tickets in your area for your selected sport.',
    tags: [
      {
        name: 'scss',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'yellow-text-gradient',
      },
    ],
    image: sportSeeker,
    repo: 'https://github.com/sport-seeker-zach-jay/project2-sport-seeker',
    demo: 'https://sport-seeker.netlify.app/',
  },
];

export { services, technologies, experiences, projects };
