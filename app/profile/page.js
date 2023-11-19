'use client';

import Profile from '../components/Profile/Profile';
import { useEffect, useState } from 'react';
import dogs from '../../fakeDogs.js';
import { useSearchParams } from 'next/navigation';
import styles from './profile.module.css';

export default function ProfilePage() {
  // const [dog, setDog] = useState(null);
  const params = useSearchParams();
  const dogId = params.get('id'); // number
  const numericDogId = parseInt(dogId, 10); // Convert to number
  const foundDog = dogs.find(d => d.id === numericDogId);


  // useEffect(() => {
  //     setDog(dogs.find(dog => dog.id === dogId));

  // }, [params])




  return (
    <div className={styles.profilePageContainer}>
      <Profile data={foundDog} />
    </div>
  )
}