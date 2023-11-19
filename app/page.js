import Image from 'next/image'
import ComposePost from './components/ComposePost/ComposePost';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className='appContent'>
        <ComposePost />
        <Feed />
      </div>
    </>


  )
}
