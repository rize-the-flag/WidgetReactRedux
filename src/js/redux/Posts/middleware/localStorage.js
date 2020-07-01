import { ADD_POST, DELETE_POST } from '../actions';
import { LOCAL_STORAGE_KEY } from '../../../appConf';
import LocalStorage from '../../../LocalStorage';

const storage = new LocalStorage( LOCAL_STORAGE_KEY );

export const addPostToLocalStorage = () => ( next ) => ( action ) => {
  if (action.type === ADD_POST) {
    const {hash, value} = action.post;
    storage.addRecord( hash, value );
  }
  return next( action );
};

export const deletePostFromLocalStorage = () => ( next ) => ( action ) => {
  if (action.type === DELETE_POST) {
    storage.removeRecord( action.hash );
  }
  return next( action );
};

