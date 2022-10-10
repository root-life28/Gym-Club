import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>
        <div className="footer">
          <div className="social-links">
          <img src={Github} alt="github" />
            <img src={Instagram} alt="instagram" />
            <img src={LinkedIn} alt="Linkedin" />
          </div>
          <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        </div>

      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
    </div>
  )
}

export default Footer