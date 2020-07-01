import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { mwPostsHandler } from './Posts/middleware/postHandler';

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware( ReduxThunk, mwPostsHandler ))
);
