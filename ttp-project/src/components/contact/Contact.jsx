import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import { clear } from '@testing-library/user-event/dist/clear'



const Contact = () => {

  return (
    
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Koffison29@gmail.com</h5>
            <a href="mailto:Koffison29@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>

        <form onSubmit=''>
          <input type="text" name="name" placeholder='Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' />
          <textarea name="message" rows="7" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' onReset={clear}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact