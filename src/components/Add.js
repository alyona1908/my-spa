import React from 'react';
import './Add.css';
import { useHistory } from 'react-router-dom';

function Add() {
  const history = useHistory();

  function addUser() {
    history.push('/add');
  }
  return (
    <button onClick={() => addUser()} className="create-btn" type="button">
      <span>Create User</span>
      <span className="material-icons md-36">
        note_add
      </span>
    </button>
  );
}

export default Add;
