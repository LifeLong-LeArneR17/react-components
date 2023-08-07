import React from 'react';
import { Container } from './Container';
import PostList from './Postlist/postList';
import posts from './data/post.json';
import GlobalStyle from './GlobalStyle';

export const App = () => {
  return (
    <>
          <GlobalStyle/>
      <Container>
        {' '}
        <h2>Hello</h2>
      </Container>
      <Container>
        <PostList posts={posts} />
      </Container>
    </>
  );
};
