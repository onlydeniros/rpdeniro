import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaFacebook} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>123 Planet</p>
                        <p>Mars</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                (904)521-1760</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                dumasdj23@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>Bio</h4>
                <p>You find greatness when you maximize smallness.</p>
                <div className="social">
                    <a href={"https://www.facebook.com/deniro.dumas.7/"} rel="noopener noreferrer" target="_blank">
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </a>
                    <a href={"https://twitter.com/_promethan"} rel="noopener noreferrer" target="_blank">
                    <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/deniro-dumas-7b57491ba/"} rel="noopener noreferrer" target="_blank">
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer