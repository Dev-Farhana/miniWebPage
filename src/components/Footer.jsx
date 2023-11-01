import React from 'react';
import '../App.css';
import logo from '../assets/images/whitelogo.png';

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='footerDivs flex'>
          <div className='ft-logo'>
              <img src={logo} alt="logo" />
          </div>

          <div className='footer-items'>
            <ul className='flex'> 
              <li> About </li>
              <li>Contact</li>
              <li>Help&Support</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Login </li>
            </ul>
          </div>

          <div className='social-icons flex'>
            <li> <i class="bi bi-facebook"></i></li>
            <li> <i class="bi bi-instagram"></i></li>
            <li> <i class="bi bi-twitter"></i></li>

          </div>
      </div>
      <p>© 2023 BidDrive, All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer;