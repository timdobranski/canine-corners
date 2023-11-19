import Image from 'next/image'
import ComposePost from './components/ComposePost/ComposePost';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';
import Feed from './components/Feed/Feed';

export default function Home() {
  return (
    <>
      <div className='appContent'>
      <h1 className='title'>Canine Corners</h1>
      <SidebarLeft />
        <ComposePost />
        <Feed />
      <SidebarRight />
      </div>
    </>


  )
}
