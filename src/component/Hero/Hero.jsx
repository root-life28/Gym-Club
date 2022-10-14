import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'

 const Hero = () => {
    const transition={type:'spring', duration:3}
    const mobile=window.innerWidth<=768?true: false
  return (
    <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            {/* Best ad */}
            <div className="the-best-ad">
                <motion.div initial={{left:mobile?"165px":"238"}}
                  whileInView={{left:'8px'}} transition={{...transition,type:'tween'}}>
                    
                   
                    
                </motion.div>
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
            <motion.div className="heart-rate" initial={{right:'-1rem'}} whileInView={{right:'4rem'}} transition={transition}>
                <img src={Heart} alt="Heart" />
                <span>Heart Rate</span><span>116 bpm</span>
            </motion.div>
            {/* hero images */}
            <img src={hero_image} className="hero-image" alt="hero_image"  />
            <motion.img 
            initial={{right:'11rem'}}
            whileInView={{right:"20rem"}}
            transition={transition}
            src={hero_image_back} className="hero-image-back" alt="hero_image_back"  />

            {/* calories */}
            <motion.div initial={{right:"37rem"}}
            whileInView={{right:"28rem"}}
            transition={transition}

             className="calories">
                <img src={Calories} alt="Calories" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero;
