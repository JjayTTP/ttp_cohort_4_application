import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/koffison-voumadi/" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="https://github.com" target='_blank' rel="noopener noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials