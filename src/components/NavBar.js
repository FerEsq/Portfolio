import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/navbar.scss'
import icon from '../media/icon.png'

function NavBar() {
    const [showed, setShowed] = useState(true);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset
            const visible = scroll > currentScroll || currentScroll < 10;
            setShowed(visible)
            setScroll(currentScroll)
        };

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scroll])

    const handleNavigation =(divID)=>{
        const div = document.getElementById(divID)
        div.scrollIntoView({ behavior: 'smooth'})
    }

  return (
    <div>
        <nav className="navbar" style={{ display: showed ? 'flex' : 'none' }}>
            <div className="icon">
                <img src={icon} alt='icon' onClick={()=>handleNavigation('div-home')}/> 
            </div>

            <div class="hamburger-menu">
                <input id="menu-icon" type="checkbox" />
                <label class="menu-button" for="menu-icon">
                <span></span>
                </label>

                <ul class="menu__box">
                    <li> <p class="menu-item" onClick={()=>handleNavigation('div-about')}> Sobre mi </p></li>
                    <li> <p class="menu-item" onClick={()=>handleNavigation('div-languages')}> Lenguajes </p></li>
                    <li> <p class="menu-item" onClick={()=>handleNavigation('div-projects')}> Proyectos </p></li>
                    <li> <p class="menu-item" onClick={()=>handleNavigation('div-contact')}> Contacto </p></li>
                </ul>
            </div>
        </nav>
        
    </div>
  )
}

export default NavBar