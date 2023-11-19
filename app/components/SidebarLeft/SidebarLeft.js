'use client';

import styles from './SidebarLeft.module.css';
import Link from 'next/link';


export default function SidebarLeft () {



  return (
    <div className={styles.sidebarWrapper}>
      <Link href='/dogs'>
        <h2>Dogs</h2>
      </Link>
      <Link href='/dogs'>
        <h2>Messages</h2>
      </Link>
      <Link href='/profile?id=1'>
        <h2>Profile</h2>
      </Link>
      <Link href='/dogs'>
        <h2>Your Schedule</h2>
      </Link>
    </div>
  )
}