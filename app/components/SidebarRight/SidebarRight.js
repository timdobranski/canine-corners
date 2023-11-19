import styles from './SidebarRight.module.css';
import Link from 'next/link';

export default function SidebarLeft () {
  return (
    <div className={styles.sidebarWrapper}>

        <h2 className={styles.header}>Friends At The Park Today:</h2>
        <div className={styles.atPark}>
          <h2 className={styles.name}>Aria</h2>
          <p className={styles.time}>10:00am</p>
        </div>
        <div className={styles.atPark}>
          <h2 className={styles.name}>Paw McCartney</h2>
          <p className={styles.time}>4:00pm</p>
        </div>
        <div className={styles.atPark}>
          <h2 className={styles.name}>Woofie Goldberg</h2>
          <p className={styles.time}>5:00pm</p>
        </div>


    </div>
  )
}