import './globals.css'
import Header from './components/Header/Header';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';

export const metadata = {
  title: 'Canine Corners',
  description: 'A place for dogs to connect',
  metadataBase: new URL('https://canine-corners.vercel.app/')
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='app'>
        <Header />
        <SidebarLeft />
        <SidebarRight />
        <div className='background'>
          {children}
        </div>
        </body>
    </html>
  )
}
