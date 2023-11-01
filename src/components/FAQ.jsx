import React from 'react';
import '../App.css';
import carLogo from '../assets/images/car logo.png';
import user from '../assets/images/user.png';
import fqImg from '../assets/images/frequently.png';
import google from '../assets/images/google.png';
import android from '../assets/images/android.png';
import apple from '../assets/images/apple.png';


const FAQ = () => {
  return (
   <>
   <div className='fqImg'>
    <img src={fqImg} alt="" />
   </div>
   <div className='flex section-faq'>
    <div className='member-content'>
        <img src={carLogo} alt="" />
        <h2>For Members</h2>
        <p>Owning the hours. On your leisure. Make money.</p>
        <div className='appIcons flex'>
          <img src={google} alt="google" />
          <img src={android} alt="android" />
          <img src={apple} alt="apple" />
        </div>
    </div>
    <div className='user-content'>
        <img src={user} alt="" />
        <h2>For Users</h2>
        <p>Your own desired Ride.</p>
        <div className='appIcons flex'>
          <img src={google} alt="google" />
          <img src={android} alt="android" />
          <img src={apple} alt="apple" />
        </div>
    </div>
   </div>
   
   
   </>
  )
}

export default FAQ