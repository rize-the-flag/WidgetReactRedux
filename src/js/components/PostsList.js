import React from 'react';
import Post from './Post';

const PostsList = ( {posts, postsCount, deletePost} ) => {
  const postsList = posts.map( ( post ) => {
    const {hash, value: {userName, commentBody, dateTime}} = post;
    return (
      <li key = {hash} className = "comments-list__item">
        <Post
          userName = {userName}
          commentBody = {commentBody}
          dateTime = {dateTime}
          onCloseBtnClick = {deletePost}
          hash = {hash}
        />
      </li>
    );
  } );
  return (
      <ul className = "comments-list">
        {postsList}
      </ul>
  );
};

export default PostsList;
