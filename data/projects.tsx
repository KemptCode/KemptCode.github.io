const projectLookupTable: {
    [name: string]: {
      title: string,
      endTimeStamp: Date,
      startTimeStamp?: Date,
      tags: string[],
      thumbnail: string,
      description: string,
    }
  } = {
    'recreateWeb': {
      title: 'Recreate Web Layouts',
      endTimeStamp: new Date(2022, 8, 5),
      tags: ['javascript'],
      thumbnail: '',
      description: 'Studying other websites as a way to understand front-end development.'
    },
    'fingerTracker': {
      title: 'Finger Tracker Game',
      endTimeStamp: new Date(2021, 4, 5),
      tags: ['java', 'ml', 'computer vision', 'game'],
      thumbnail: '',
      description: 'Uses MediaPipe to track fingers in a gamified way.',
    },
    'mazeGenerator': {
      title: 'Maze Generator',
      endTimeStamp: new Date(2020, 10, 20),
      tags: ['python', 'algorithm'],
      thumbnail: 'https://github.com/KemptCode/Maze_generator/raw/master/maze_5.png',
      description: 'Creates a maze using a Prim\s algorithm.',
    },
    'spleef': {
      title: 'Spleef in Roblox',
      endTimeStamp: new Date(2015, 2, 6),
      tags: ['lua', 'roblox', 'game'],
      thumbnail: '',
      description: 'Something about the old project',
    },
  };

export default projectLookupTable;