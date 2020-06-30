import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import { mwPostsHandler } from './js/redux/Posts/middleware/postHandler';
import CommentsWidget from './js/components/CommentWidget';
import  rootReducer from './js/redux/rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware( ReduxThunk, mwPostsHandler ))
);

window.store = store;

ReactDOM.render(
  <Provider store = {store}>
    <CommentsWidget/>
  </Provider>,
  document.getElementById( 'root' ) );

