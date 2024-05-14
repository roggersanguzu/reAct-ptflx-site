import React, { useState, useEffect } from 'react';
import './Hero.css';
import darkArrow from '../../Assets/arrow.png';

const Hero = () => {
  const [color, setColor] = useState('#FFFFFF');

  function handler() {
    setColor(color === '#FFFFFF'? '#000000' : '#FFFFFF');
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;
    const body = document.body;
    if (color === '#FFFFFF') {
      body.style.color = '#000000'; 
    } else {
      body.style.color = '#FFFFFF';
    }
  }, [color]);

  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>
          Web development, computer networks &amp; cloud computing.
        </h1>
        <p>
          Adept at integrating AI and ML into scalable cloud solutions, optimizing network performance, and managing server infrastructure
        </p>
        <button className='btn change' onClick={handler}>CHANGE BACKGROUND <img src={darkArrow} /></button>
      </div>
    </div>
  );
};

export default Hero;
