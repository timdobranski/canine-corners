import styles from './Profile.module.css';
import Image from 'next/image';

export default function Profile({ data }) {
  console.log('data', data);

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.name}>{data.name}</h1>
      <Image src={data.img} alt={data.name} width='500' height='500' className={styles.imgContainer}/>
      <p className={styles.bio}>{data.bio}</p>
      <div className={styles.roommate}>
        <h2>Roommate:</h2>
        <p>{data.owner}</p>
      </div>
    </div>
  )
}