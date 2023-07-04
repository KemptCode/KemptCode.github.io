import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import projectLookupTable from '@/data/projects';
import {Link} from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        {Object.entries(projectLookupTable).map(([title, project]) => {
          return (
            <div className={styles.card} key={title}>
              <Link href={title} target="_blank" rel="noreferrer">
                <h2>{project.title}</h2>
              </Link>
              <p>{project.description}</p>
            </div>
          )
        })}
        <Footer />
      </main>
    </>
  )
}
