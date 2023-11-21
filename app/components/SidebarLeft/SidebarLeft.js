import styles from './SidebarLeft.module.css';
import Link from 'next/link';


export default function SidebarLeft({ closeSidebar }) {
  const handleItemClick = () => {
    if (window.innerWidth <= 768) { // Check for mobile screen width
      console.log('closing sidebar')
      closeSidebar();
    } else {
      console.log('not closing sidebar')
    }
  };

  return (
    <>
    <div className={styles.sidebarWrapper} onClick={handleItemClick}>
      {/* Regular Links */}
      <Link href='/' ><h1 className={styles.title}>Home</h1></Link>
      <Link href='/dogs'><h2>Friends</h2></Link>
      <Link href='/messages'><h2>Messages</h2></Link>
      <Link href='/profile?id=1'><h2>Profile</h2></Link>
      <Link href='/schedule'><h2>Your Schedule</h2></Link>
      <div className={styles.divider}></div>
      <h2>Park Links</h2>
      <Link href='/'><h2 className={styles.headerLink}>Photos</h2></Link>
      <Link href='/'><h2 className={styles.headerLink}>Announcements</h2></Link>
      <Link href='/'><h2 className={styles.headerLink}>Events</h2></Link>
      <Link href='/'><h2 className={styles.headerLink}>Donate</h2></Link>
      <Link href='/'><h2 className={styles.headerLink}>About Us</h2></Link>


    </div>
    </>
  );
}