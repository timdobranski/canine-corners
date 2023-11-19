import AllDogs from '../components/AllDogs/AllDogs';
import styles from './dogs.module.css';

export default function Dogs() {
  return (
    <div className={styles.allDogsContainer}>
      <h1 className={styles.dogsPageTitle}>Our Family</h1>
      {/* <h2 className={styles.dogsPageDescription}>Connect With A Friend To Plan Your Next Play Session</h2> */}
      <AllDogs />
    </div>
  )
}