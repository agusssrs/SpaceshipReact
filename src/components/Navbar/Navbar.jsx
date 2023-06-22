import React from 'react'
import './Navbar.css'
import logosasml from '../../resources/logosasml.png'

const Navbar = () => {
  return (
    <header>
        <img src= {logosasml} alt="logo" className='logo' />
        <nav className='navbar'>
            <ul className='navbarList'>
                <li><a href='../App.js' class="home">Inicio</a></li>
                <li><a href="#CarList">Coches</a></li>
                <li><a href="#aboutUs">Nosotros</a></li>
                <li><a href="#contactUs">Contactanos</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar