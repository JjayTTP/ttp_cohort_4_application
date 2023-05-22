import React from 'react'
import CV from '../../assets/cv.pdf'
const cta = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#conatct" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default cta