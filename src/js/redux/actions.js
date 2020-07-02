import BrowserStorage from '../BrowserStorage';
import { LOCAL_STORAGE_KEY } from '../appConf';

export const DELETE_POST = 'APP/DELETE_POST';
export const ADD_POST = 'APP/ADD_POST';

const localStorage = new BrowserStorage( LOCAL_STORAGE_KEY );

export const addPost = post => dispatch => {
  const {hash, value} = post;
  localStorage.addRecord( hash, value );
  dispatch({type: ADD_POST, post})
};

export const deletePost = hash => dispatch => {
  localStorage.removeRecord( hash );
  dispatch({type: DELETE_POST, hash})
};
