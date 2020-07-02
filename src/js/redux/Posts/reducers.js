import LocalStorage from '../../LocalStorage';
import { LOCAL_STORAGE_KEY } from '../../appConf';
import { UPDATE_POSTS } from './actions';

const localStorage = new LocalStorage( LOCAL_STORAGE_KEY );

const initialState = [...localStorage.getStorage()];

export const postsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case UPDATE_POSTS:
      return [...action.posts];
    /*    case ADD_POST:
          const {hash, value} = action.post;
          return [...state, {hash, value}];
        case DELETE_POST:
          const newPosts = state.filter( post => post.hash !== action.hash );
          return [...newPosts];*/
    default:
      return state;
  }
};

