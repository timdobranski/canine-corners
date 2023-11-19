'use client';

import Profile from '../components/Profile/Profile';
import { useEffect, useState } from 'react';
import dogs from '../../fakeDogs.js';
import { useSearchParams } from 'next/navigation';
import styles from './profile.module.css';
import posts from '../../fakePosts.js';
import Feed from '../components/Feed/Feed';

export default function ProfilePage() {
  // const [dog, setDog] = useState(null);
  const params = useSearchParams();
  const dogId = params.get('id'); // number
  const numericDogId = parseInt(dogId, 10); // Convert to number
  const foundDog = dogs.find(d => d.id === numericDogId);


  const dogPosts = posts.filter(p => p.author_id === numericDogId);




  return (
    <div className={styles.profilePageContainer}>
      <Profile data={foundDog} posts={dogPosts} />
      <Feed id={foundDog.id}/>
    </div>
  )
}