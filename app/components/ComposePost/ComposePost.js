'use client'

import styles from './ComposePost.module.css';
import { useState, useEffect } from 'react'



export default function ComposePost() {
  const [post, setPost] = useState('');
  const [postType, setPostType] = useState('story');

  return (
    <div className={styles.composePostContainer}>
      <h1 className={styles.composePostTitle}>Bark Away!</h1>
      <form className={styles.composeForm}>
        <div className={styles.postTypesContainer}>
          <label className={styles.postType}>Story</label>
          <label className={styles.postType}>Recipe</label>
          <label className={styles.postType}>Warning</label>
          <label className={styles.postType}>Giveaway</label>
        </div>
        {/* <div className={styles.postInputBackground}> */}
        <textarea className={styles.postTextArea} name="title"></textarea>
        {/* </div> */}
        <button className={styles.postSubmitButton} type="submit">Submit</button>
      </form>
    </div>
  )

}