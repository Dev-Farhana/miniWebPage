import React from 'react';
import '../App.css';
import arrow from '../assets/images/arrow.jpg.png';
import steps from '../assets/images/steps.svg';


const Map = () => {
  return (
    <>
        <div className='map'>
            <h2>Helping to form the future of Glorious Driving.</h2>
            <p>Users are now able to access cars at their fingertips and get around town faster than ever before.</p>
            {/* <span className='contact'>Contact us 
            <img src={arrow} alt="arrowImage" /> </span> */}
            <a href="#"> Contact us <img src={arrow} alt="arrowImage" />  </a>
            {/* <button>Contact us <img src={arrow} alt="arrowImage" /> </button> */}
      </div>

      <div className='flex sectionImages'>
            <div className='sectionRide'>
                <h3>Book a ride</h3>
                <p>When you need a ride, BidDrive</p>
                <button>Sign up now </button>
            </div>
            
            <div className='sectionMember'>
                <h3> Become a Member </h3>
                <p>Owning the hours. On your leisure. Make money </p>
                <button>Sign up now </button>
            </div>
      </div>

      <div className='text-section flex'>
            <div className='innertextUser flex'>
                <div>
                    <h1> For Users </h1>
                    <img src={steps} alt="" />
                </div>
                <div className='para'>
                    {/* <h1> For Users </h1> */}
                    <h5> 1. Download the user app and register. </h5> 
                    <h5> 2. Add Pickup & Drop off. </h5>
                    <h5> 3. Confirm booking. </h5>
                    <h5> 4. Enjoy the ride. </h5>
                </div>

            </div>
            <div className='innertextMember flex'>
                <div>
                    <h1> For Members </h1>
                    <img src={steps} alt="" />
                </div>
                <div className='para'>
                    <h5> 1. Download the rider app and register. </h5> 
                    <h5> 2. Upload required documents. </h5>
                    <h5> 3. Enable Active mode. </h5>
                    <h5> 4. Get paid instantly. </h5>
                </div>
            </div>
      </div>
      
    </>
  )
}

export default Map;