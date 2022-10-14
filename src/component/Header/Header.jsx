import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile=window.innerWidth<=768?true: false
  const [menuOpened,setMenuOpened]=useState(false);
  return (
    <div className="header">
        <img  src={Logo} alt="Logo" className='logo'  />
        {(menuOpened===false&&mobile===true)?(
          <div
           style={{backgroundColor:'var(--appColor)',padding:'0.55rem',borderRadius:'5px'}}><img src={Bars} alt="bars" style={{width:'1.5rem',height:'1.5rem'}} 
           onClick={()=>setMenuOpened(true)}
           /></div>
        ): <ul className='header-menu'>
        <li ><Link onClick={()=>setMenuOpened(false)}
        to='hero' className={true} smooth={true}>Home</Link></li>
        <li ><Link onClick={()=>setMenuOpened(false)}
        to='programs' className={true} smooth={true} >Programs</Link></li>
        <li ><Link onClick={()=>setMenuOpened(false)}
        to='reasons' className={true} smooth={true}>Why us</Link></li>
        <li >
          <Link onClick={()=>setMenuOpened(false)}
        to='plans-container' className={true} smooth={true}
          >Plans</Link></li>
        <li><Link  onClick={()=>setMenuOpened(false)}
        to='Testimonials' span={true} smooth={true}>Testimonial</Link></li>
    </ul>}
       
    </div>
  )
}

export default Header