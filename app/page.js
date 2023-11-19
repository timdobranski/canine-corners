import Image from 'next/image'
import ComposePost from './components/ComposePost/ComposePost';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

export default function Home() {
  return (

      <div className='appContent'>
        <Sidebar />
        <ComposePost />
        <Feed />
      </div>


  )
}
