'use client';

import styles from './Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRight, faArrowLeft, } from '@fortawesome/free-solid-svg-icons';
import SidebarLeft from '../SidebarLeft/SidebarLeft';
import SidebarRight from '../SidebarRight/SidebarRight';
import Image from 'next/image';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsLeftSidebarOpen(false);
    setIsRightSidebarOpen(false);
  };

  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
    setIsNavOpen(false);
    setIsRightSidebarOpen(false);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
    setIsNavOpen(false);
    setIsLeftSidebarOpen(false);
  };

  const closeAllNavs = () => {
    setIsNavOpen(false);
    setIsLeftSidebarOpen(false);
    setIsRightSidebarOpen(false);
  };

  return (
    <div className={styles.headerWrapper}>
      <h1 className='title'>Canine Corners</h1>
      <div className={styles.profileButton}>
        <Image src='/images/aria-profile-pic.jpeg' alt='profile' fill='true' />
      </div>
      {/* <div className={styles.buttonWrapper}>
        <button className={styles.navToggleLeft} onClick={toggleLeftSidebar}>
          <h2 className={styles.navButton}> Social</h2>
        </button>

        <button className={styles.navToggle} onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} className={styles.navButton} />
        </button>

        <button className={styles.navToggleRight} onClick={toggleRightSidebar}>
        <h2 className={styles.navButton}> Friends</h2>
        </button>
      </div>

      {isLeftSidebarOpen && <div onClick={closeAllNavs}><SidebarLeft /></div>}
      {isRightSidebarOpen && <div onClick={closeAllNavs}><SidebarRight /></div>}
      {<div onClick={closeAllNavs} className={`${styles.navBar} ${isNavOpen ? styles.navOpen : styles.navClosed}`}>
      <Link href='/'>
      <h1 className={styles.title}>Home</h1>
      </Link>
        <h2 className={styles.headerLink}>Photos</h2>
        <h2 className={styles.headerLink}>Announcements</h2>
        <h2 className={styles.headerLink}>Events</h2>
        <h2 className={styles.headerLink}>Donate</h2>
        <h2 className={styles.headerLink}>About Us</h2>
      </div>} */}
    </div>
  );
}



