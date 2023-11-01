import React from 'react';
import '../App.css';
import user from '../assets/images/usermobile.png';
import mobileCar from '../assets/images/mobilecar.png';
import manDrive from '../assets/images/mandrive.png';

const Content = () => {
  return (
    <>
    <div className='content'>
      <div className='first-content flex'>
        <div className='img-content'>
          <img src={user} alt="user" /> 
        </div>
        <div className='text-content'>
            <h3>Simple to Book</h3>
            <p>Relax and enjoy your time while we handle the driving. We'll pick you up right away from your specified pickup point and transport you securely to your destination.</p>
            <a href="#"> Learn more</a> 
        </div>
      </div>

      <div className='second-content flex'>
        <div className='text-content'>
          <h1>One App takes you Everywhere</h1>
          <p>You can travel to all of your destinations with your own desired car.</p>
          <a href="#"> Learn more</a> 
        </div>
        <div className='img-content'>
          <img src={mobileCar} alt="CarImage" />
        </div>
      </div>

      <div className='third-content flex'>
        <div className='img-content'>
          <img src={manDrive} alt="manImage" />
        </div>
        <div className='text-content'>
          <h1>We love to serve you </h1>
          <p> We’re here to provide you with a hassle-free experience that makes your life easier.</p>
          <a href="#"> Learn more</a> 
        </div>
      </div>
    </div>
    </>
  )
}

export default Content