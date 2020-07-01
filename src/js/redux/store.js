import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  addPostToLocalStorage,
  deletePostFromLocalStorage,
} from './Posts/middleware/localStorage';

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware
    (
      addPostToLocalStorage,
      deletePostFromLocalStorage,
    )
  )
);
