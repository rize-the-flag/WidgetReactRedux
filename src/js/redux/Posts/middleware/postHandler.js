import { ADD_POST, DELETE_POST } from '../actions';
import { LOCAL_STORAGE_KEY } from '../../../appConf';
import LocalStorage from '../../../LocalStorage';

const storage = new LocalStorage( LOCAL_STORAGE_KEY );

export const mwPostsHandler = ( store ) => ( next ) => ( action ) => {
  if (action.type === ADD_POST) {
    const {hash, value} = action.payload;
    storage.addRecord( hash, value );
  }

  if (action.type === DELETE_POST) {
    storage.removeRecord( action.payload );
  }

  return next( action );
};

