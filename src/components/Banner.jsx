import React from 'react';
import mobile from '../assets/images/mobile.png';
import carIcon from '../assets/images/car logo.png';
import google from '../assets/images/google.png';
import android from '../assets/images/android.png';
import apple from '../assets/images/apple.png';
import '../App.css';

const Banner = () => {
  return (
    <>
    <div className='banner flex'>
        <div className='para'>
            <h3> When you need a ride</h3>
            <h2>BidDrive <img src={carIcon} alt="carIcon" /> </h2>
            <p>The BidDrive service gives you with secure, reliable, and economical             transportation. The most affordable rates and the shortest pickup times in your city.</p>
            <div className='appIcons flex'>
                <img src={google} alt="google" />
                <img src={android} alt="android" />
                <img src={apple} alt="apple" />
            </div>
        </div>
        <div className='bannerImg'>
            <img src={mobile} alt="MobileImage" />
        </div>
    </div>
    </>
  )
}

export default Banner;
