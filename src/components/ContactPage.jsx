import React from 'react'
import '../App.css';
import support from '../assets/images/publicrelation.png';
import question from '../assets/images/question.png';
import phone from '../assets/images/phonelogo.png';
import message from '../assets/images/messagelogo.png';


const ContactPage = () => {
  return (
   <>
        <div className='contact-page flex'>
                <div className='feedback'>
                    <h1>Contact Us</h1>
                    <p>For any questions or feedback please feel free to contact us using the form below, or email us at Info@BidDrive.com</p>
                        <form>
                            <div className='name'> 
                                <label> First Name </label>  <br />
                                <input type="text"  className='inputs'/> 
                            </div>
                            <div className='name'>
                                <label> Last Name </label> <br />
                                <input type="text" className='inputs' /> 
                            </div>
                            <div className='name'>
                                <label htmlFor=""> Email </label> <br />
                                <input type="email" className='inputs' /> 
                            </div>
                            <div className='name'>
                                <label> Subject </label> <br />
                                <input type="email" className='inputs' /> 
                            </div>
                            <div className='name'>
                                <label> Message </label> <br />
                                <textarea name="" id="" cols="40" rows="6" className='inputs'></textarea> 
                            </div>
                        </form>
                        <button> Send </button>
                </div>

                <div className='support'>
                    <div>
                        <img src={question} alt="" />
                        <h1> For help & Support </h1>
                    </div>
                    <div>
                        <img src={phone} alt="" />
                        <h3>+1 647-699-4687</h3>
                    </div>
                    <div>
                        <img src={message} alt="" />
                        <h3>info@BidDrive.com</h3>
                    </div>

                </div>
        </div> 
   </>
   
  )
}

export default ContactPage