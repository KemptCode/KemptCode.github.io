import Head from 'next/head'
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

const lookupTable: {
  [name: string]: {
    title: string,
    endTimeStamp: Date,
    startTimeStamp?: Date,
    tags: string[],
    thumbnail: string,
    description: string,
    content: any
  }
} = {
  'spleef': {
    title: 'Spleef in Roblox',
    endTimeStamp: new Date(2015, 2, 6),
    tags: ['lua', 'roblox', 'game'],
    thumbnail: '',
    description: 'Something about the old project',
    content: <></>
  },
  'mazeGenerator': {
    title: 'Maze Generator',
    endTimeStamp: new Date(2020, 10, 20),
    tags: ['python', 'algorithm'],
    thumbnail: 'https://github.com/KemptCode/Maze_generator/raw/master/maze_5.png',
    description: 'Creates a maze using a Prim\s algorithm.',
    content: <></>
  },
  'fingerTracker': {
    title: 'Finger Tracker Game',
    endTimeStamp: new Date(2021, 4, 5),
    tags: ['java', 'ml', 'computer vision', 'game'],
    thumbnail: '',
    description: 'Uses MediaPipe to track fingers in a gamified way.',
    content: <></>
  },
};

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>KemptCode</title>
        <meta name="description" content="A sample portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar />
        {lookupTable[router.query.projectName?.toString() ?? '']}
        <Footer />
      </main>
    </>
  )
}
