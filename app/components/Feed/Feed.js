'use client';

import styles from './Feed.module.css';
import { useState } from 'react';
import Post from '../Post/Post';
import posts from '../../../fakePosts';

export default function Feed() {
  // State to track the selected filter
  const [filter, setFilter] = useState('all');

  // Filtered posts based on the selected filter
  const filteredPosts = filter === 'all' ? posts : posts.filter(post => post.type === filter);

  // List of filter options
  const filterOptions = ['all', 'story', 'recipe', 'warning', 'giveaway'];

  return (
    <div className='feedContainer'>
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
      {filteredPosts.map(post => (
        <div className='postContainer' key={post.id}>
          <Post data={post}/>
        </div>
      ))}
    </div>
  );
}