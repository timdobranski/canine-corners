import styles from './DogCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function DogCard({ dog }) {
  return (
    <div className={styles.dogCardWrapper}>
      <div className={styles.dogCardImage}>
        <div style={{ position: 'relative', width: 'auto', height: '200px', overflow: 'hidden' }}>
          <Link href={`/profile?id=${dog.id}`}>
            <Image src={dog.img} alt={dog.name} layout='fill' objectFit='cover' objectPosition='center' />
          </Link>
        </div>
      </div>
      <div className={styles.dogCardInfoWrapper}>
      <Link href={`/profile?id=${dog.id}`}>
        <h2 className={styles.name}>{dog.name}</h2>
      </Link>
        <h3 className={styles.ageBreed}>{`${dog.age} year old ${dog.breed}`}</h3>
        <p className={styles.bio}>{dog.bio}</p>
      </div>
    </div>
  );
}

// {
//   name: 'Furrah Fawcett',
//   img: '/images/max-profile-pic.jpeg',
//   bio: `Max is a strong and majestic Malamute with a love for snowy adventures and hikes. He's friendly, intelligent, and enjoys being part of a pack.`,
//   owner: ['Henry Johnson'],
//   age: 4,
//   breed: 'Alaskan Malamute',
//   id: 7
//   }