import styles from './Sidebar.module.css';
import Link from 'next/link';

export default function Sidebar () {
  return (
    <div className={styles.sidebarWrapper}>
      <Link href='/dogs'>
        <h2>Dogs</h2>
      </Link>
      <Link href='/dogs'>
        <h2>Messages</h2>
      </Link>
      <Link href='/dogs'>
        <h2>Profile</h2>
      </Link>
      <Link href='/dogs'>
        <h2>Your Schedule</h2>
      </Link>
    </div>
  )
}