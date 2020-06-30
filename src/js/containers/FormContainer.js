import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../redux/Posts/actions';
import Form from '../components/Form';

const FormAddPostsContainer = ( {addPost} ) => {
  return (
    <Form
      addPost = {addPost}
    />
  );
};

const mapDispatchToProps = {
  addPost
}

export default connect( null, mapDispatchToProps )( FormAddPostsContainer );
