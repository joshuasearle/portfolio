import { Technology, Project } from '../types';

const projects: Project[] = [
  {
    name: 'Game of Life Simulator',
    link: 'https://joshuasearle.github.io/gol-sim/',
    source: 'https://github.com/joshuasearle/gol-sim',
    technologies: [
      Technology.React,
      Technology.TypeScript,
      Technology.HTML,
      Technology.CSS,
      Technology.Webpack,
    ],
    description: "Website for simulating John Conway's Game of Life",
  },
  {
    name: 'Sorting Algorithm Visualiser',
    link: 'https://joshuasearle.github.io/sorting-algorithm-visualiser/',
    source: 'https://github.com/joshuasearle/sorting-algorithm-visualiser',
    description:
      'Website that lets you visualise your favourite sorting algorithms, experimenting with different speeds, different numbers of elements, and stopping and starting different algorithms.',
    technologies: [
      Technology.JavaScript,
      Technology.HTML,
      Technology.CSS,
      Technology.React,
      Technology.Redux,
      Technology.Webpack,
    ],
  },
  {
    name: 'BAC Calculator',
    link: 'https://joshuasearle.github.io/bac-calc/',
    source: 'https://github.com/joshuasearle/bac-calc',
    description:
      'Simple website that allows you to find what your estimated BAC will be over time, given some inputs.',
    technologies: [
      Technology.TypeScript,
      Technology.HTML,
      Technology.CSS,
      Technology.Bootstrap,
      Technology.React,
      Technology.Chartjs,
      Technology.Webpack,
    ],
  },
  {
    name: 'Boids!',
    link: 'https://joshuasearle.github.io/boids/',
    source: 'https://github.com/joshuasearle/boids',
    description:
      'Boids are a form of artificial life that move based on three simple rules. This site attempts help explore boids, allowing users to experiment with some of the settings.',
    technologies: [Technology.JavaScript, Technology.CSS, Technology.HTML],
  },
  {
    name: 'Real Time Text to Speech Translator',
    source:
      'https://github.com/joshuasearle/real-time-text-to-speech-translator',
    description:
      'Allows users to input some text, and a language into a website, and get a response with the voiced version of their text in their chosen language.',
    technologies: [
      Technology.TypeScript,
      Technology.Angular,
      Technology.Nodejs,
      Technology.Websockets,
      Technology.Bootstrap,
      Technology.GoogleCloudFunctions,
      Technology.Express,
    ],
  },
  {
    name: 'Realtime Poll Webapp',
    source: 'https://github.com/joshuasearle/realtime-poll-webapp',
    description:
      'Allows users to create their own custom poll, and watch the poll numbers move in real-time, without page reloading.',
    technologies: [
      Technology.TypeScript,
      Technology.Angular,
      Technology.Nodejs,
      Technology.Websockets,
      Technology.Bootstrap,
      Technology.Chartjs,
      Technology.Express,
    ],
  },
  {
    name: 'Rogue-like Zombie Game',
    source: 'https://github.com/joshuasearle/roguelike-zombie-game',
    description: 'Roguelike zombie survival game made in Java.',
    technologies: [Technology.Java],
  },
  {
    name: 'Book Management System',
    source: 'https://github.com/joshuasearle/spa-book-management',
    description: 'Full stack book management system.',
    technologies: [
      Technology.TypeScript,
      Technology.Angular,
      Technology.JavaScript,
      Technology.Nodejs,
      Technology.Express,
      Technology.HTML,
      Technology.CSS,
      Technology.Mongodb,
    ],
  },
];
