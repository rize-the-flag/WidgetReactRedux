import React from 'react';

const Post = ( {userName, commentBody, dateTime, hash, onCloseBtnClick} ) => {
  return (
    <div className = "post">
      <div className = "post__header">
        <span className = "post__user-name">{userName}</span>
        <button
          className = "btn-close"
          onClick = {() => onCloseBtnClick( hash )}
        >
          &#10060;
        </button>
      </div>
      <div className = "post__body">{commentBody}</div>
      <div className = "post__footer">
        <span className = "post__date">{dateTime}</span>
      </div>
    </div>
  );
};

export default Post;
