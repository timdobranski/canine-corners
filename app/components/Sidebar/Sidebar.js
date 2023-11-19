import styles from './Sidebar.module.css';

export default function Sidebar () {
  return (
    <div className={styles.sidebarWrapper}>
      <h2>Dogs</h2>
      <h2>Messages</h2>
      <h2>Profile</h2>
      <h2>Pictures</h2>
      <h2>Your Schedule</h2>
      <h2>Recipes</h2>
      <h2>Warnings</h2>
    </div>
  )
}