import React from 'react';
import { connect } from 'react-redux';
import PostsList from '../components/PostsList';
import { deletePost } from '../redux/Posts/actions';
import { selectPosts } from '../redux/Posts/selectors';


const PostsListContainer = ( {posts, postsCount, deletePost} ) => {
  return (
    <PostsList
      posts = {posts}
      deletePost = {deletePost}
      postsCount = {postsCount}
    />
  );
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    deletePost: ( hash ) => dispatch( deletePost( hash ) ),
  };
};

const mapStateToProps = ( state ) => ( {
  posts: selectPosts( state ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( PostsListContainer );
