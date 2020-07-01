import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CommentsWidget from './js/components/CommentWidget';
import store from './js/redux/store';



ReactDOM.render(
  <Provider store = {store}>
    <CommentsWidget/>
  </Provider>,
  document.getElementById( 'root' ) );

