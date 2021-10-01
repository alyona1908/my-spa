import React from 'react';
import sticker from '../img/sticker.jpg';
import './pages.css';

function Home() {
  return (
    <div className="content">
      <h1>Hi! This Test SPA. Home page</h1>
      <img className="sticker" src={sticker} alt="Greetings" />
    </div>
  );
}

export default Home;
