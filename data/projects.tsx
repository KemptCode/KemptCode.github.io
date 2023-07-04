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
    'spleef': {
      title: 'Spleef in Roblox',
      endTimeStamp: new Date(2015, 2, 6),
      tags: ['lua', 'roblox', 'game'],
      thumbnail: '',
      description: 'Something about the old project',
    },
    'mazeGenerator': {
      title: 'Maze Generator',
      endTimeStamp: new Date(2020, 10, 20),
      tags: ['python', 'algorithm'],
      thumbnail: 'https://github.com/KemptCode/Maze_generator/raw/master/maze_5.png',
      description: 'Creates a maze using a Prim\s algorithm.',
    },
    'fingerTracker': {
      title: 'Finger Tracker Game',
      endTimeStamp: new Date(2021, 4, 5),
      tags: ['java', 'ml', 'computer vision', 'game'],
      thumbnail: '',
      description: 'Uses MediaPipe to track fingers in a gamified way.',
    },
  };

export default projectLookupTable;