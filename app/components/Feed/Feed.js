'use client';

import styles from './Feed.module.css';
import { useState, useEffect } from 'react';
import Post from '../Post/Post';
import posts from '../../../fakePosts';

export default function Feed() {




  return (
    <div className='feedContainer'>
      {posts.map(post => (
        <div className='postContainer' key={post.id}>
          <Post data={post}/>
        </div>
      ))}
    </div>
  );
}