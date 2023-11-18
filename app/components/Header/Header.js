import styles from './Header.module.css';

export default function Header() {

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.navBar}>
        <h2 className={styles.loginButton}>Login</h2>
        <h2 className={styles.headerLink}>Announcements</h2>
        <h2 className={styles.headerLink}>Events</h2>
        <h2 className={styles.headerLink}>Donate</h2>
        <h2 className={styles.headerLink}>About Us</h2>
      </div>
      <h1 className={styles.title}>Canine Corners</h1>
    </div>

  )

}