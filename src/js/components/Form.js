import React from 'react';
import shortid from 'shortid';
import { useState } from 'react';

const makePost = ( hash, value ) => {
  return {
    hash,
    value
  };
};

const Form = ( {addPost} ) => {

  const [userName, setUserName] = useState( '' );
  const [commentBody, setCommentBody] = useState( '' );

  const handleSubmit = ( ev ) => {
    ev.preventDefault();
    addPost(
      makePost( shortid.generate(),
                {
                  userName,
                  commentBody,
                  dateTime: new Date().toLocaleString()
                }
      )
    );

    setUserName( '' );
    setCommentBody( '' );
  };

  return (
    <form
      className = "form-add"
      onSubmit = {handleSubmit}
    >
      <input
        className = "form-add__author"
        name = "userName"
        type = "text"
        placeholder = "Ваше имя"
        minLength = "3"
        required = {true}
        value = {userName}
        onChange = {ev => setUserName( ev.target.value )}
      />
      <textarea
        className = "form-add__text"
        name = "commentBody"
        placeholder = "Ваш комментарий"
        rows = "6"
        required = {true}
        value = {commentBody}
        onChange = {ev => setCommentBody( ev.target.value )}
      >
      </textarea>
      <button className = "submit" type = "submit">
        Добавить
      </button>
    </form>
  );
};

export default Form;
