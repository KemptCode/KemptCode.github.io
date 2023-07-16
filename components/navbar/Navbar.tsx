import { Grid, Typography, Link, Card, Stack } from '@mui/material'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header>
      <Stack justifyContent={'flex-start'} alignItems={'center'} direction='row' className={styles.navbar}>
        <Typography variant='h5' className={styles.name}>Jacob Barnes</Typography>
        <Grid container direction={'row'} justifyContent='flex-start' className={styles.pageLinksContainer}>
          <Link href='/about' className={styles.pageLink}><Card className={styles.card}>About</Card></Link>
          <Link href='/projects' className={styles.pageLink}><Card className={styles.card}>Projects</Card></Link>
          <Link href='/experience' className={styles.pageLink}><Card className={styles.card}>Experience</Card></Link>
          {/* <Link href='education' className={styles.pageLink}><Card className={styles.card}>Education</Card></Link> */}
          {/* <Link href='contact' className={styles.pageLink}><Card className={styles.card}>Contact</Card></Link> */}
        </Grid>
      </Stack>
    </header>
  )
}
