import LocalStorage from '../../LocalStorage';
import { LOCAL_STORAGE_KEY } from '../../appConf';
import { DELETE_POST, ADD_POST } from './actions';

const localStorage = new LocalStorage( LOCAL_STORAGE_KEY );

const initialState = [...localStorage.getStorage()];

export const postsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case ADD_POST:
      const {hash, value} = action.payload;
      return [...state, {hash, value}];
    case DELETE_POST:
      const newPosts = state.filter( post => post.hash !== action.payload );
      return [...newPosts];
    default:
      return state;
  }
};

