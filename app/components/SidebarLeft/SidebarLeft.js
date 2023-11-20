

import styles from './SidebarLeft.module.css';
import Link from 'next/link';


export default function SidebarLeft() {

  return (
    <>
    <div className={styles.sidebarWrapper}>
      {/* Regular Links */}
      <Link href='/dogs'><h2>Friends</h2></Link>
      <Link href='/messages'><h2>Messages</h2></Link>
      <Link href='/profile?id=1'><h2>Profile</h2></Link>
      <Link href='/schedule'><h2>Your Schedule</h2></Link>

    </div>
      {/* Dropdown for mobile */}
      {/* <select
        className={styles.mobileSidebarDropdown}
        value={selectedPage}
        onChange={handleDropdownChange}

      >
        <option value='/dogs'>Dogs</option>
        <option value='/messages'>Messages</option>
        <option value='/profile?id=1'>Profile</option>
        <option value='/schedule'>Your Schedule</option>
      </select> */}
    </>
  );
}