import React from 'react';
import logo from '../assets/images/carlogo.jpg.png';
import '../App.css';
const Navbar = () => {
  return (
    <>
    <div className='nav-bar'>
        <img src={logo} alt="LogoImage" />
        <div className='nav-items'>
            <ul>
                <li><span> Home</span> </li>
                <li>About</li>
                <li>Contact </li>
                <li>Help & Support</li>
                <li><button>Login</button></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar;