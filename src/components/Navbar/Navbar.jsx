import React from 'react'
import './Navbar.css'
import logosasml from '../../resources/logosasml.png'
import cartImg from '../../resources/cartImg.png'

const Navbar = () => {
  return (
    <header>
        <img src= {logosasml} alt="logo" className='logo' />
        <nav className='navbar'>
            <ul className='navbarList'>
                <li><a href='#hero' class="home">Inicio</a></li>
                <li><a href="#CarList">Coches</a></li>
                <li><a href="#aboutUs">Nosotros</a></li>
                <li><a href="#contactUs">Contactanos</a></li>
            </ul>

            <label for="cartToggle" class="cartLabel">
                <div class="cart-icon"><img src={cartImg} alt="" /></div>
            </label>
            <input type="checkbox" id='cartToggle' />
            <div class="cart" id="cartBox">                
                <h2>Reservas</h2>
                <span class="endCartList"></span>
                <div class="totalCart">
                    <p>Total:$</p>
                    <span>0</span>
                </div>
                <button class="btnBuy">Comprar</button>
                <button class="cartDlt">Vaciar</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar