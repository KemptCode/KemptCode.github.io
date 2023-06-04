import { Grid, Typography, Link, Card } from '@mui/material'
import styles from './Navbar.module.css'

export default function Navbar() {


  return (
    <header className={styles.navbar}>
      <Grid container justifyContent='space-between' direction='row'>
        <Grid item><Typography className={styles.name}>Jacob Barnes</Typography></Grid>

        <Grid container direction={'row'} justifyContent='space-between' className={styles.pageLinksContainer}>
          <Link href='/about' className={styles.pageLink}><Card className={styles.card}>About</Card></Link>
          <Link href='/projects' className={styles.pageLink}><Card className={styles.card}>Projects</Card></Link>
          <Link href='/experience' className={styles.pageLink}><Card className={styles.card}>Experience</Card></Link>
          {/* <Link href='education' className={styles.pageLink}><Card className={styles.card}>Education</Card></Link> */}
          {/* <Link href='contact' className={styles.pageLink}><Card className={styles.card}>Contact</Card></Link> */}
        </Grid>
      </Grid>
    </header>
  )
}
