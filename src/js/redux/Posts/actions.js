export const DELETE_POST = 'APP/DELETE_POST';
export const ADD_POST = 'APP/ADD_POST';

export const addPost = ( post ) => ( {type: ADD_POST, post} );
export const deletePost = ( hash ) => ( {type: DELETE_POST, hash} );

