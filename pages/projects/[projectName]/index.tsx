import Head from 'next/head'
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

const lookupTable: Record<string, string> = {
  'spleef': 'Something about the old project'
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
