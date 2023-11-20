'use client'

import styles from './ComposePost.module.css';
import { useState } from 'react';

export default function ComposePost() {
  const [post, setPost] = useState('');
  const [postType, setPostType] = useState('story');

  const postTypes = ['story', 'recipe', 'warning', 'giveaway']; // Define post types

  return (
    <div className={styles.composePostContainer}>
      <h1 className={styles.composePostTitle}>Bark Away!</h1>
      <h2 className={styles.composePostSubtitle}>Share your story, recipe, warning, or giveaway!</h2>
      <form className={styles.composeForm}>
        <div className={styles.postTypesContainer}>
          {/* Labels for non-mobile view */}
          {postTypes.map(type => (
            <label key={type} className={styles.postType}>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
          ))}
        </div>

        {/* Dropdown for mobile */}
        <select
          className={styles.mobilePostTypeDropdown}
          value={postType}
          onChange={(e) => setPostType(e.target.value)}
        >
          {postTypes.map(type => (
            <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
          ))}
        </select>

        <textarea className={styles.postTextArea} name="title" value={post} onChange={(e) => setPost(e.target.value)}></textarea>
        <button className={styles.postSubmitButton} type="submit">Submit</button>
      </form>
    </div>
  );
}