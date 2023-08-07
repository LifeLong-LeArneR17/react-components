import React from 'react';
import PropTypes from 'prop-types';
import  'index.css';
import { PostItem } from '../PostItem/PostIem.jsx';
const ImgPost = "url(https://wikiway.com/upload/hl-photo/b3f/45b/gora-everest_34.jpg)";
function PostList({posts}) {
  console.log(posts);
  return (
    <>
      <h2 style={
        {
          color: "red",
          textAlign: "center",
          backgroundColor: "yellow",
        }
      }>List of Posts</h2>
      <ul style = {{
        backgroundImage: ImgPost,
      }}>
        {posts.map(({id, title, text}) => (
       <PostItem key={id} title={title} text={text}/>
        ))
}
      </ul>
    </>
  );
}
export default PostList;
PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};