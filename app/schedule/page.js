import ScheduleTable from '../components/Schedule/Schedule';
import dogs from '../../fakeDogs';
import styles from './schedule.module.css';

export default function SchedulePage() {
  const dogId = 1;
  const dog = dogs.find(d => d.id === dogId);

  return (
    <div className={styles.scheduleContainer}>
      <h1>{`${dog.name}'s Weekly Park Schedule`}</h1>
      <ScheduleTable schedule={dog.schedule} />
    </div>
  );
}