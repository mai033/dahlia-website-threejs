import scale from '../assets/images/scale.png';
import briefcase from '../assets/images/briefcase.png';

// import { CgWorkAlt } from 'react-icons/cg';
// import { FaReact } from 'react-icons/fa';

import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  tailwindcss,
  threads,
  typescript,
  snapgram,
  summiz,
} from '../assets/icons';

import three from '../assets/icons/three.svg';
import python from '../assets/icons/python.svg';
import postgresql from '../assets/icons/postgresql.svg';
import docker from '../assets/icons/docker.svg';
import kubernetes from '../assets/icons/kubernetes.svg';
import prometheus from '../assets/icons/prometheus.svg';
import grafana from '../assets/icons/grafana.svg';
import jest from '../assets/icons/jest.svg';
import aws from '../assets/icons/aws.svg';
import graphql from '../assets/icons/graphql.svg';
import webpack from '../assets/icons/webpack.svg';
import vercel from '../assets/icons/vercel.svg';

import eye from '../assets/icons/eye.svg';
import calendar from '../assets/icons/calendar.svg';
import cat from '../assets/icons/cat.svg';
import cat1 from '../assets/icons/cat1.svg';
import ai from '../assets/icons/ai.svg';
import sale from '../assets/icons/sale.svg';
import website from '../assets/icons/website.svg';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: python,
    name: 'Python',
    type: 'Backend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: graphql,
    name: 'GraphQL',
    type: 'Database',
  },
  {
    imageUrl: postgresql,
    name: 'PostgreSQL',
    type: 'Database',
  },
  {
    imageUrl: motion,
    name: 'Motion',
    type: 'Animation',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: three,
    name: 'Three.js',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: docker,
    name: 'Docker',
    type: 'DevOps',
  },
  {
    imageUrl: kubernetes,
    name: 'Kubernetes',
    type: 'DevOps',
  },
  {
    imageUrl: prometheus,
    name: 'Prometheus',
    type: 'DevOps',
  },
  {
    imageUrl: grafana,
    name: 'Grafana',
    type: 'DevOps',
  },
  {
    imageUrl: aws,
    name: 'AWS',
    type: 'DevOps',
  },
  {
    imageUrl: jest,
    name: 'Jest',
    type: 'Testing',
  },
  {
    imageUrl: webpack,
    name: 'Webpack',
    type: 'DevOps',
  },
  {
    imageUrl: vercel,
    name: 'Vercel',
    type: 'DevOps',
  },
];

export const experiences = [
  {
    title: 'AI Trainer',
    company_name: 'Scale AI',
    icon: scale,
    iconBg: '#fff',
    date: '2024 - Present',
    points: ['LLM training on software engineering.'],
  },
  {
    title: 'Software Engineer',
    company_name: 'Kube VX',
    icon: react,
    iconBg: '#fff',
    date: '2023 - Present',
    points: [
      'Developed an Observability Platform for analyzing Kubernetes clusters by implementing Node.js, Prometheus, Grafana, and Chart.js.',
      'Employed React, Redux, and Material UI to improve project efficiency, achieving a 20% improvement in page loading times.',
      "Improved scalability by leveraging MongoDB's low-latency queries for efficient performance and accommodating growing data demands.",
      'Engineered the AI Kubernetes Assistant, achieving a 95% accuracy.',
    ],
  },
  {
    title: 'Office Manager',
    company_name: 'Endevio',
    icon: briefcase,
    iconBg: '#fff',
    date: 'Sep 2020 - Feb 2023',
    points: [
      'Led cross-functional teams, improving project delivery by 20% and enhancing inter-departmental communication by 15%.',
      'Introduced and integrated technology tools (Jira, HubSpot, ClickUp, Clockify, Payhawk, Shireburn, ERP) to enhance team efficiency and project management, aligning with Scrum and Agile methodologies, fostering a 16% increase in productivity.            ',
      'Increased revenue by 12% through strategic partnerships and strong client relationships, as indicated in the annual ROI report.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/mai033',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/dahlia-mai',
  },
];

export const projects = [
  {
    iconUrl: eye,
    theme: 'btn-back-red',
    name: 'Observability Platform',
    description:
      'Developed a web application that analyzes Kubernetes clusters, featuring an AI assistant.',
    link: 'https://www.kubevx.com',
  },
  {
    iconUrl: calendar,
    theme: 'btn-back-green',
    name: 'Meeting Scheduler',
    description:
      'Created a a meeting scheduling platform that allows everyone to add their availability on a grid, enabling users to identify the slot that best overlaps.',
    link: 'https://rendez-view.vercel.app/',
  },
  {
    iconUrl: cat1,
    theme: 'btn-back-blue',
    name: 'Pet Adoption Platform',
    description:
      'Designed and built an online, searchable, database of animals who need a home. We help connect pets in need with foster and forever homes.',
    link: 'https://github.com/MeowMatch/MeowMatch',
  },
  {
    // iconUrl: snapgram,
    iconUrl: ai,
    theme: 'btn-back-pink',
    name: 'AI Tutor',
    description:
      'Built a revolutionary app for academic success, empowering users to create personalized AI tutors that serve as tailored learning assistants powered by cutting-edge AI technology.',
    link: 'https://github.com/Floppy-Floppy-Floppy-Sea-Spider/Cerebella',
  },
  {
    iconUrl: website,
    theme: 'btn-back-black',
    name: 'Portfolio Website',
    description:
      'Deployed a portfolio website using Next.js, Tailwind, and Vercel.',
    link: 'https://dahliamai.vercel.app/',
  },
  {
    iconUrl: sale,
    theme: 'btn-back-yellow',
    name: 'Sales Management Tool',
    description:
      'Developed a web application that helps keep track of the sales process.',
    link: 'https://sales-hub-omega.vercel.app/',
  },
];
