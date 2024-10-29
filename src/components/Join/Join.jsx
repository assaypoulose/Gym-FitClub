import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef(null); // Initialize the ref for the form element
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_psg9ftp', 'template_umk1gc9', form.current, 'cqgw7Dg8jUWG0Fn3B')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    };
  
    return (
      <div className='join' id='join-us'>
        <div className="left-j">
          <hr />
          <div>
            <span className='stroke-text'>ready to </span>
            <span>level up</span>
          </div>
          <div>
            <span>your body </span>
            <span className='stroke-text'>with us?</span>
          </div>
        </div>
        <div className="right-j">
          <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Enter your email address" required />
            <button type="submit" className="btn btn-j">Join Now</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Join;