'use client';

import React, { useState, useEffect } from 'react';
import './globals.css';
import Header from './components/Header/Header';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faUserFriends, faBars } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';



export default function RootLayout({ children }) {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
    setIsRightSidebarOpen(false); // Close right sidebar when opening left
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
    setIsLeftSidebarOpen(false); // Close left sidebar when opening right
  };



  return (
    <html lang="en">
      <Head>
        <title>Canine Corners</title>
        <meta name="description" content="A place for dogs to connect" />
      </Head>

      <body >
        <div className='app'>
        <Header
          toggleLeftSidebar={toggleLeftSidebar}
          toggleRightSidebar={toggleRightSidebar}
          isLeftSidebarOpen={isLeftSidebarOpen}
          isRightSidebarOpen={isRightSidebarOpen}
        />
        <div className={isLeftSidebarOpen ? 'sidebarWrapper sidebarOpen' : 'sidebarWrapper'}>
        <SidebarLeft closeSidebar={() => setIsLeftSidebarOpen(false)} />
        </div>
        <div className={isRightSidebarOpen ? 'sidebarRightWrapper sidebarOpen' : 'sidebarRightWrapper'}>
        <SidebarRight closeSidebar={() => setIsRightSidebarOpen(false)} />
        </div>
        <div className='background'>
          {children}
        </div>
        </div>
      </body>
    </html>
  );
}
