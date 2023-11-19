'use client';

import styles from './Feed.module.css';
import { useState } from 'react';
import Post from '../Post/Post';
import posts from '../../../fakePosts';

export default function Feed({ id }) {
  // State to track the selected filter
  const [filter, setFilter] = useState('all');

  let displayPosts;
  if (id) {
    // If id is provided, filter by author_id
    displayPosts = posts.filter(p => p.author_id === id);
  } else {
    // Otherwise, use the selected filter
    displayPosts = filter === 'all' ? posts : posts.filter(post => post.type === filter);
  }
  // List of filter options
  const filterOptions = ['all', 'story', 'recipe', 'warning', 'giveaway'];

  return (
    <div
    className='feedContainer'
    style={{ marginTop: id ? '2rem' : '14rem' }}

    >
      {/* Buttons for selecting the filter */}
      <div className={styles.filterButtons}>
      <button
          className={filter === 'all' ? styles.selectedFilter : ''}
          onClick={() => setFilter('all')}
        >
          All Posts
        </button>
        <button
          className={filter === 'story' ? styles.selectedFilter : ''}
          onClick={() => setFilter('story')}
        >
          Stories
        </button>
        <button
          className={filter === 'recipe' ? styles.selectedFilter : ''}
          onClick={() => setFilter('recipe')}
        >
          Recipes
        </button>
        <button
          className={filter === 'warning' ? styles.selectedFilter : ''}
          onClick={() => setFilter('warning')}
        >
          Warnings
        </button>
        <button
          className={filter === 'giveaway' ? styles.selectedFilter : ''}
          onClick={() => setFilter('giveaway')}
        >
          Giveaways
        </button>
      </div>


      {/* Render only posts that match the selected filter */}
      {displayPosts.map(post => (
        // <div className='postContainer' key={post.id}>
          <Post data={post} key={post.id}/>
        // </div>
      ))}
      <h3 className={styles.copyright}>{`Fake Copyright 2023 Tim Dobranski & Canine Corners`}</h3>
    </div>
  );
}