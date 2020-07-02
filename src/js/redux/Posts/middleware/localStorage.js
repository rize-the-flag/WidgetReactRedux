import { ADD_POST, DELETE_POST, updatePosts } from '../actions';
import { LOCAL_STORAGE_KEY } from '../../../appConf';
import LocalStorage from '../../../LocalStorage';

const storage = new LocalStorage( LOCAL_STORAGE_KEY );

export const addPostToLocalStorage = () => ( dispatch ) => ( action ) => {
  if (action.type === ADD_POST) {
    const {hash, value} = action.post;
    storage.addRecord( hash, value );
    return dispatch(updatePosts(storage.getStorage()));
  }
  return dispatch( action );
};

export const deletePostFromLocalStorage = () => ( dispatch ) => ( action ) => {
  if (action.type === DELETE_POST) {
    storage.removeRecord( action.hash );
    return dispatch(updatePosts(storage.getStorage()));
  }
  return dispatch( action );
};

