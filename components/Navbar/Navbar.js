import React from 'react';
import './Navbar.css';
import Logo from '../../Assets/pp.jpeg';

const Navigationbar = () => {
  return (
    <nav className='container'>
        <img src={Logo} alt='Profile Photo' className='logo'/>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/About">About me</a></li>
            <li><a href="/Certifications">Certifications</a></li>
            <li><a href='/btn'><button className='btn'>Contact</button></a></li>
        </ul>
    </nav>
  );
}

export default Navigationbar;
