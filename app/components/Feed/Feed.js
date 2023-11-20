'use client';

import styles from './Feed.module.css';
import { useState } from 'react';
import Post from '../Post/Post';
import posts from '../../../fakePosts';

export default function Feed({ id }) {
  // State to track the selected filter
  const [filter, setFilter] = useState('all');

  // Filter the posts based on author_id or selected filter
  let filteredByAuthor = id ? posts.filter(p => p.author_id === id) : posts;
  let displayPosts = filter === 'all' ? filteredByAuthor : filteredByAuthor.filter(post => post.type === filter);

  // List of filter options
  const filterOptions = ['all', 'story', 'recipe', 'warning', 'giveaway'];

  // Function to get button/dropdown label
  const getButtonLabel = (option) => {
    switch (option) {
      case 'all':
        return 'All Posts';
      case 'story':
        return 'Stories';
      default:
        return option.charAt(0).toUpperCase() + option.slice(1) + 's';
    }
  };

  return (
    <div className='feedContainer'>
      {/* Dropdown for mobile */}
      <h1 className={styles.hiddenOnDesktop}>Filter Posts</h1>
      <select
      className={styles.mobileFilterDropdown}
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      // Removed the inline style
    >
      {filterOptions.map(option => (
        <option key={option} value={option}>
          {getButtonLabel(option)}
        </option>
      ))}
    </select>


      {/* Buttons for selecting the filter */}
      <div className={styles.filterButtons}>
        {filterOptions.map(option => (
          <button
            key={option}
            className={filter === option ? styles.selectedFilter : ''}
            onClick={() => setFilter(option)}
          >
            {getButtonLabel(option)}
          </button>
        ))}
      </div>

      {/* Render posts */}
      {displayPosts.map(post => (
        <Post data={post} key={post.id} />
      ))}
    </div>
  );
}