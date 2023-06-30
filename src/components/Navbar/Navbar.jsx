import React from 'react'
import './Navbar.css'
import logosasml from '../../resources/logosasml.png'
import cartImg from '../../resources/cartImg.png'
import allCars from '../../data/data'
import trash from '../../resources/trash.svg'
import { useDispatch } from 'react-redux'

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
                <div class="cartIcon"><img src={cartImg} alt="" /></div>
                <span className='ballon'></span>
            </label>
            <input type="checkbox" id='cartToggle' />
            <div class="cart" id="cartBox">                
                <h2>Reservas</h2>
                <div className='cartItem'>
                    <img src={allCars.img} alt="" />
                    <div className='carInfo'>
                        <h2 className='carModel'>{allCars.model}</h2>
                        <h3 className='carBrand'>{allCars.brand}</h3>
                        <p className='price'>{allCars.price}</p>
                    </div>
                    <div className='quantityHandler'>
                        <span className='trashBtn'>
                            <img src={trash} alt="" />
                        </span>
                    </div>
                </div>
                <span class="endCartList"></span>
                <div class="totalCart">
                    <p>Total:$</p>
                    <span>0</span>
                </div>
                <button class="btnBuy">Comprar</button>
                <button class="cartDlt" onClick={useDispatch}>Vaciar</button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar