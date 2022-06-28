import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {

    const navToggle = () => {
        const navToggler = document.querySelector(".nav-toggler");
        navToggler.classList.toggle("active");
        const nav = document.querySelector(".my-nav");
        const socials = document.querySelector(".my-socials");
        nav.classList.toggle("open");
        socials.classList.toggle("open");
        if(nav.classList.contains("open") && socials.classList.contains("open")){
            nav.style.maxHeight = nav.scrollHeight + "px";
            socials.style.maxHeight = socials.scrollHeight + "px";
        }
        else{
            nav.removeAttribute("style");
            socials.removeAttribute("style");
        }
     } 
    return(
        <header className="nav-header">
    <div className="nav-container" id="top">
        <div className="nav-row align-items-center justify-content-between">
            <div className="logo">
            <Link to='/' style={{textDecoration: 'none'}}>
               TrapSlik
               </Link>
            </div>
            <button type="button" className="nav-toggler" onClick={navToggle}>
               <span></span>
            </button>
            <nav className="my-nav">
                         <ul className='nav-list'>
                         <NavLink exact='true'  activeclassname='active' to='/' className='link'>
                             Home <i className="bi bi-house-fill"></i>
                           </NavLink>
                        <NavLink  activeclassname='active' to='/about' className='link'>
                            About <i className="bi bi-file-earmark-person-fill"></i>
                            </NavLink>
                            <NavLink  activeclassname='active' to='/music' className='link'>
                            Music <i className="bi bi-file-music-fill"></i>
                            </NavLink>
                            <NavLink  activeclassname='active' to='/gallery' className='link'>
                            Gallery <i className="bi bi-camera-fill"></i>
                            </NavLink>
                            <a href='#contact' className='link'>
                            Contact <i className="bi bi-envelope-fill"></i>
                            </a>
                         </ul>
                  
            </nav>
            <div className="my-socials">
                         <ul className='socials'>
                             <a href="https://www.facebook.com/TrapSlik" target="blank"><i className="bi bi-facebook"></i></a>
                             <a href="https://mobile.twitter.com/trapslik" target="blank"><i className="bi bi-twitter"></i></a>
                             <a href="https://www.instagram.com/__trapslik/" target="blank"><i className="bi bi-instagram"></i></a>
                         </ul>
                  
            </div>
        </div>
    </div>
    <hr/>
 </header>
    )
}