'use client';

import styles from './Feed.module.css';
import { useState } from 'react';
import Post from '../Post/Post';
import posts from '../../../fakePosts';

export default function Feed({ id }) {
  // State to track the selected filter
  const [filter, setFilter] = useState('all');

  // First, filter by author_id if id is provided, else use all posts
  let filteredByAuthor = id ? posts.filter(p => p.author_id === id) : posts;

  // Then, apply the selected type filter
  let displayPosts = filter === 'all' ? filteredByAuthor : filteredByAuthor.filter(post => post.type === filter);

  // List of filter options
  const filterOptions = ['all', 'story', 'recipe', 'warning', 'giveaway'];

  return (
    <div className='feedContainer' style={{ marginTop: id ? '2rem' : '14rem' }}>
      {/* Buttons for selecting the filter */}
      <div className={styles.filterButtons}>
        {filterOptions.map(option => (
          <button
            key={option}
            className={filter === option ? styles.selectedFilter : ''}
            onClick={() => setFilter(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {/* Render only posts that match the selected filter */}
      {displayPosts.map(post => (
        <Post data={post} key={post.id} />
      ))}
      <h3 className={styles.copyright}>{`Fake Copyright 2023 Tim Dobranski & Canine Corners`}</h3>
    </div>
  );
}
