'use client';

import styles from './Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SidebarLeft from '../SidebarLeft/SidebarLeft';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.headerWrapper}>

      <button className={styles.navToggle} onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} className={styles.navButton}/>
      </button>
      <div className={`${styles.navBar} ${isNavOpen ? styles.navOpen : ''}`}>
      <Link href='/'>
      <h1 className={styles.title}>Home</h1>
      </Link>
        <h2 className={styles.headerLink}>Photos</h2>
        <h2 className={styles.headerLink}>Announcements</h2>
        <h2 className={styles.headerLink}>Events</h2>
        <h2 className={styles.headerLink}>Donate</h2>
        <h2 className={styles.headerLink}>About Us</h2>
      </div>
    </div>
  )
}