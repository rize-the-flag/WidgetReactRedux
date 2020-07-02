import { ADD_POST, DELETE_POST } from './actions';
import BrowserStorage from '../BrowserStorage';
import { LOCAL_STORAGE_KEY } from '../appConf';


const localStorage = new BrowserStorage( LOCAL_STORAGE_KEY );

const rootReducer = ( state = [...localStorage.getStorage()], action ) => {
  switch ( action.type ) {
    case ADD_POST:
      const {hash, value} = action.post;
      return [...state, {hash, value}];
    case DELETE_POST:
      const newPosts = state.filter( post => post.hash !== action.hash );
      return [...newPosts];
    default:
      return state;
  }
};

export default rootReducer;
