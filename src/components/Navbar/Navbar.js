import React from 'react'
import './Navbar.css'
import Logo from '../../Assets/pp.jpeg'

const Navigationbar = () => {
  return (
    <nav className='container'>
        <img src={Logo}  alt='Profile Photo' className='logo'/>
        <ul>
            <li>Home</li>
             <li>Skills</li>
             <li>About me</li>
              <li>Certifications</li>
                <li><button className='btn'>Contact</button></li>
        </ul>
    </nav>
  )
}

export default Navigationbar
