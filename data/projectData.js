const projectData = {
  chatrooms: {
    name: 'Chatrooms',
    youtubeId: 'WLF3M7EyHbw',
    liveUrl: 'https://chatrooms-server-joshua-searle.herokuapp.com/',
    codeUrl: 'https://github.com/joshuasearle/chatrooms-client',
    description:
      'Webapp that allows users to set their display name, create rooms that get updated in real time, and then allows users to send messages to each in real time. Uses TypeScript and React on the frontend, uses Node.js and Express on the backend, and uses Socket IO for real time communication between server and clients. Hosted on Heroku with automatic code deploys.',
  },
  boids: {
    name: 'Boids',
    youtubeId: 'QTLTIQbwsmk',
    liveUrl: 'https://joshuasearle.github.io/boids/',
    codeUrl: 'https://github.com/joshuasearle/boids',
    description:
      'Boids are a form of AI that simulate the flocking behaviour of animals like fish and birds. This webapp allows uses to add a custom number of boids, barriers, and what I call droids to an arena. The users can then experiement with different strengths of the rules that govern the boid / droid behaviour.',
  },
  'game-of-life': {
    name: 'Game of Life Simulator',
    youtubeId: '_poS50APNs4',
    liveUrl: 'https://joshuasearle.github.io/gol-sim/',
    codeUrl: 'https://github.com/joshuasearle/gol-sim',
    description:
      'Webapp that allows you to simulate John Conway\'s Game of Life cellular automata. It gives the users the options to adjust the spawn rate, randomise the board, reset the board, draw custom shapes, and access easter egg boards by pressing the "t" and the "o".',
  },
  'sorting-visualiser': {
    name: 'Sorting Visualiser',
    youtubeId: '0i7jdU66Uqs',
    liveUrl: 'https://joshuasearle.github.io/sorting-algorithm-visualiser/',
    codeUrl: 'https://github.com/joshuasearle/sorting-algorithm-visualiser',
    description:
      "This app lets you visualise your favourite sorting algorithms. You can pick the speed you'd like the animations to be, as well as change the speed mid visualisation. You can pick the number of elements you'd like to animate, and the visualisation automatically stops if you change it mid sort. You can instantly sort the elements to see how different algorithms react to already sorted lists. You can instantly sort the elements in reverse order to see how different algorithms react to reverse sorted lists. You can also manually stop the visualisation, so you can mix and match algorithms.",
  },
  asteroids: {
    name: 'Asteroids',
    youtubeId: 'C7UWXuRzKLY',
    liveUrl: 'https://joshuasearle.github.io/asteroids/',
    codeUrl: 'https://github.com/joshuasearle/asteroids',
    description:
      'This a web based clone of the popular game Asteroids. It was created using TypeScript with no animation libraries. It features such as pausing, game ending, lives, score and high score, and spawn protection.',
  },
};

module.exports = projectData;
