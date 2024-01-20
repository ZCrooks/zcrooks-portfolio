import {
  frontend,
  ux,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  firebase,
  nodejs,
  git,
  figma,
  hotelHaven,
  battleRockets,
  sportSeeker,
  travelAgency,
  virtualMuseum,
  coverhunt,
  dcc,
  kelhel,
  microverse,
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
    name: 'Tailwind CSS',
    icon: tailwind,
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
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  }
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Hotel Haven',
    description: 'A sleek, React Bootstrap application that allows users to explore a diverse array of stunning vacation properties across a multitude global destinations.',
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
    description: 'Designed and developed a Battleship game using React. Fully interactive and responsive experience allowing users engage in a classic turn-based battle against their computer opponent.',
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
