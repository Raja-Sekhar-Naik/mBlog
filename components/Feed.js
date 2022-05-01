import { Container } from '@mui/material';
import React from 'react'
import Post from './Post'
import './Feed.css'

const Feed = () => {
  return (
    <Container className='container'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    
      

    </Container>
    
  );
};

export default Feed;