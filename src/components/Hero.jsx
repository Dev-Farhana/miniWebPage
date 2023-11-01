import React from 'react';
import '../App.css';
import priceHike from '../assets/images/priceHikes.png';
import money from '../assets/images/money.png';
import nofee from '../assets/images/nofee.png' ;

const Hero = () => {
  return (
    <>
    <div className='hero-section'>
        <div className='head-section'>
        <h2>Owning the hours. On your leisure. Make money.</h2>
        <p>What we do for you in Canada</p>
        </div>
        <div className='item-section flex'>
            <div className='hero-item'>
                <img src={priceHike} alt="priceHike" />
                <h4>No price hikes </h4>
                <p>Why choose for repeated price hikes? Why wait so long to make a ride bookings? Make the wise decision and go get the ride since it is only a tap away.</p>
            </div>
            <div className='hero-item'>
                <img src={money} alt="money" />
                <h4>Instant payment </h4>
                <p>Earn money consistently, keep your tips, and collect your cash. You can collect the cash from rider on the spot.</p>
            </div>
            <div className='hero-item'>
                <img src={nofee} alt="nofee" />
                <h4>No platform fee</h4>
                <p>Own your own business; there is no need to give the platform a percentage. Simply drive and grab all the cash.</p>
            </div>
        </div>
    </div>

    </>

  )
}

export default Hero