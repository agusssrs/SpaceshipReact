import React from 'react'
import './Navbar.css'
import logosasml from '../../resources/logosasml.png'
import cartImg from '../../resources/cartImg.png'
import { useSelector } from 'react-redux'
import ModalCart from './Cart/ModalCart'
import '../mediasqueries.css'

const Navbar = () => {
const { cartItems } = useSelector(state => state.cart)
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
                <div class="cartIcon"><img src={cartImg} alt="" />{
                    cartItems.length > 0 &&
                    <span className='ballon'></span>
                }</div>
                
            </label>
            <input type="checkbox" id='cartToggle' />
            <div class="cart" id="cartBox">  
            <ModalCart/>                            
            </div>
        </nav>
    </header>
  )
}

export default Navbar