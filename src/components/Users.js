import React from 'react';
import './pages.css';
import sticker from '../img/sticker1.jpg';

function Users() {
  return (
    <div className="content">
      <h1>
        There will be a table with the name - Users
      </h1>
      <img className="sticker" src={sticker} alt="Приветствие" />
    </div>
  );
}

export default Users;
