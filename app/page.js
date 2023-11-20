'use client';

import Image from 'next/image'
import ComposePost from './components/ComposePost/ComposePost';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';
import Feed from './components/Feed/Feed';
import { useState } from 'react';

export default function Home() {
  // States to manage the visibility of sidebars
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);

  return (
    <>
      <div className={'appContent'}>
        <h1 className='title'>Canine Corners</h1>

        {/* {showLeftSidebar && (
          <div className='sidebarLeftWrapper'>
            <SidebarLeft />
          </div>
        )} */}

        <ComposePost />
        {/* <Feed /> */}

        {/* {showRightSidebar && (
          <div className='sidebarRightWrapper'>
            <SidebarRight />
          </div>
        )} */}
      </div>
    </>
  );
}