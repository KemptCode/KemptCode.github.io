import { Grid, Typography, Link, Card } from '@mui/material'
import styles from './Navbar.module.css'

export default function Navbar() {


  return (
    <header className={styles.navbar}>
      <Grid container justifyContent='space-between' direction='row'>
        <Grid item><Typography className={styles.name}>Jacob Barnes</Typography></Grid>

        <Grid container direction={'row'} justifyContent='space-between' className={styles.pageLinksContainer}>
          <Card className={styles.card}><Link className={styles.pageLink}>About</Link></Card>
          <Card className={styles.card}><Link className={styles.pageLink}>Projects</Link></Card>
          <Card className={styles.card}><Link className={styles.pageLink}>Experience</Link></Card>
          <Card className={styles.card}><Link className={styles.pageLink}>Contact</Link></Card>
        </Grid>
      </Grid>
    </header>
  )
}
