'use client'

import styles from './ComposePost.module.css';
import { useState, useEffect } from 'react'



export default function ComposePost() {
  const [post, setPost] = useState('');
  const [postType, setPostType] = useState('story');

  return (
    <div className={styles.composePostContainer}>
      {/* <h1 className={styles.composePostTitle}>Bark:</h1> */}
      <p className={styles.postDescription}>{`Bark out a fun story, a neighborhood warning, or an update to your park schedule so your friends know when you'll be there to play!`}</p>
      <form className={styles.composeForm}>
        <div className={styles.postTypesContainer}>
          <label className={styles.postType}>Story</label>
          <label className={styles.postType}>Recipe</label>
          <label className={styles.postType}>Warning</label>
          <label className={styles.postType}>Giveaway</label>
        </div>
          <input className={styles.postInput} type="text" name="title" />
        <button className="border-2 border-black" type="submit">Submit</button>
      </form>
    </div>
  )

}