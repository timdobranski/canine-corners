import './globals.css'
import Header from './components/Header/Header'


export const metadata = {
  title: 'Canine Corners',
  description: 'A place for dogs to connect',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='app'>
        <Header />
        <div className='background'>
          {children}
        </div>
        </body>
    </html>
  )
}
