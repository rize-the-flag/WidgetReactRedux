export const DELETE_POST = 'STORAGE/DELETE_POST';
export const ADD_POST = 'STORAGE/ADD_POST';
export const UPDATE_POSTS = 'APP/UPDATE_POSTS';

export const addPost = ( post ) => ( {type: ADD_POST, post} );
export const deletePost = ( hash ) => ( {type: DELETE_POST, hash} );
export const updatePosts = ( posts ) => ( {type: UPDATE_POSTS, posts})

