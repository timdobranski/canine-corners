import Image from 'next/image'
import ComposePost from './components/ComposePost/ComposePost';
import Sidebar from './components/Sidebar/Sidebar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='appContent'>
        <Sidebar />
        <ComposePost />
      </div>
    </main>
  )
}
