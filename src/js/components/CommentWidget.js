import React, { Component } from 'react';
import CommentsList from '../containers/PostsListContainer';
import FormNewComment from '../containers/FormContainer';
import '../../scss/CommentWidget.scss';

export default class CommentWidget extends Component {
  render() {
    return (
      <div className = "comment-widget">
        <CommentsList />
        <FormNewComment />
      </div>
    );
  }
}
