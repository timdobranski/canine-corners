'use client';

import styles from './Header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRight, faArrowLeft, faDog, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import SidebarLeft from '../SidebarLeft/SidebarLeft';
import SidebarRight from '../SidebarRight/SidebarRight';
import Image from 'next/image';


export default function Header({ toggleLeftSidebar, toggleRightSidebar, isLeftSidebarOpen, isRightSidebarOpen }) {

  return (
    <div className={styles.headerWrapper}>
      <button className={styles.navToggleLeft} onClick={toggleLeftSidebar}>
        <FontAwesomeIcon icon={faBars} className={styles.navButton} />
      </button>

      <h1 className='title'>Canine Corners</h1>

      {/* Include other header content here */}

      <button className={styles.navToggleRight} onClick={toggleRightSidebar}>
        {/* <FontAwesomeIcon icon={faDog} className={styles.navButton} /> */}
        <div className={styles.profileButton}>
        <Image src='/images/aria-profile-pic.jpeg' alt='profile' fill='true' />
      </div>
      </button>
    </div>
  );
}

