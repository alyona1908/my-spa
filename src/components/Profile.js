import React from 'react';
import './pages.css';
import sticker from '../img/sticker2.jpg';

function Profile() {
  return (
    <div className="content">
      <h1>
        Here will be your profile
      </h1>
      <img className="sticker" src={sticker} alt="Girl-programmer" />
    </div>
  );
}

export default Profile;
