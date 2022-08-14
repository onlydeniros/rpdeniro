import "./HeroImgStyles.css";
import IntroHero from "../assets/images/red_blue_water.jpg"
import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img" src={IntroHero} alt="beach sunset"/>
        <div className="content">
        <p>Hi, Welcome to My Universe </p>
        <h1>Software Engineer</h1>
        <div>
        
        </div>
        </div>
        </div>
     </div>
  )
}

export default HeroImg