import React from 'react'
import Header from './Header/Header'
import './Hero.css'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calories from '../assets/calories.png'

 const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            {/* Best ad */}
            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>

            {/* Hero heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>
                    Ideal Body
                    </span>
                </div>
                <div >
                    <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga fugiat nam excepturi nisi ut
                    </span>
                </div>
            </div>
            {/* figures */}

            <div className="figures">
                <div><span>+140</span><span>expert coaches</span></div>
                <div><span>+998</span><span>members joined</span></div>
                <div><span>+50</span><span>fitness programs</span></div>
            </div>
            {/* hero btn */}
            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>


        </div>
        <div className="right-h">
            <button className="btn">Join Now</button>
            <div className="heart-rate">
                <img src={Heart} alt="Heart" />
                <span>Heart Rate</span><span>116 bpm</span>
            </div>
            {/* hero images */}
            <img src={hero_image} className="hero-image" alt="hero_image"  />
            <img src={hero_image_back} className="hero-image-back" alt="hero_image_back"  />

            {/* calories */}
            <div className="calories">
                <img src={Calories} alt="Calories" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;
