import styles from './Profile.module.css';
import Image from 'next/image';
import posts from '../../../fakePosts';
import Feed from '../Feed/Feed';

export default function Profile({ data, posts }) {


  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.name}>{data.name}</h1>
      <Image src={data.img} alt={data.name} width='500' height='500' className={styles.imgContainer}/>
      <p className={styles.bio}>{data.bio}</p>
      <div className={styles.favoritesCarousel}>
        <div className={styles.places}>
          <h2 className={styles.sectionTitle}>Favorite Places</h2>
          {data.favorite_places.map(place => {
            return (
              <p className={styles.place} key={place.id}>
                {place}
              </p>
            )
          }
            )}
        </div>

        <div className={styles.foods}>
          <h2 className={styles.sectionTitle}>Favorite Foods</h2>
          {data.favorite_foods.map((food, i) => {
            return (
              <p className={styles.food} key={i}>
                {food}
              </p>
            )
          }
            )}
        </div>

        <div className={styles.activities}>
          <h2 className={styles.sectionTitle}>Favorite Activities</h2>
          {data.favorite_activities.map((activity, i) => {
            return (
              <p className={styles.activity} key={i}>
                {activity}
              </p>
            )
          }
            )}
        </div>

      </div>

      <div className={styles.profileBox}>
      <h2 className={styles.sectionTitle}>{`${data.name}'s Family`}</h2>
      {data.owner.map((owner, index) => (
        <div key={index}>
          <p>{owner.name}</p>
          <p>{owner.phone}</p>
          <p>{owner.email}</p>
        </div>
      ))}
      </div>
    </div>
  )
}