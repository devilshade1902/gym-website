import React, { useRef } from 'react';
import './join.css';
import emailjs from 'emailjs-com';

const Join = () => {
    const form =useRef()

    const sendEmail = (e)=> {
        e.preventDefault();

        emailjs.sendForm('service_18xgvzk','template_v7yncxe',form.current,'UkkNeJm-m2Iwjwpk5')
        .then((result)=>{
            console.log(result.text);
        } , (error)=>{
            console.log(error.text)
        });
        e.target.reset()
    }
    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span >YOUR BODY </span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container"  onSubmit={sendEmail}>
                    <input type="email" name='user' placeholder='Enter Your Email Adddress' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join