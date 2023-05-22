import React from 'react'
import './About.css'
import {IoMdSchool} from 'react-icons/io'
import {FaGamepad} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__cards">
          <article className='about__card'>
            <IoMdSchool className='about__icon'/>
            <h5>College</h5>
            <small>Bachelors</small>
          </article>
          <article className='about__card'>
            <FaGamepad className='about__icon'/>
            <h5>Gaming</h5>
            <small>Playstation</small>
          </article>
          <article className='about__card'>
            <MdWork className='about__icon'/>
            <h5>Work</h5>
            <small>Freelance</small>
          </article>
        </div>
        <p>
        My name is Koffison Voumadi and I am currently pursuing my Bachelors in Computer Science & Information Security. 
        During my free time, I like gaming, spending time with my friends and family, and improving my skills. Outside of school, 
        I tend to do freelancing in graphic designing and video editing from time to time.
        </p>

      </div>

    </section>
  )
    
}

export default about