import DogCard from '../DogCard/DogCard';
import dogs from '../../../fakeDogs';
import styles from './AllDogs.module.css';
import Link from 'next/link';

export default function AllDogs() {


  return (

    <div className={styles.allDogsContainer}>
        {dogs.map(dog => <DogCard key={dog.id} dog={dog} />)}
      </div>

  )

}