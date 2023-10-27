import React from 'react'
import './Navbar.css'
import logosasml from '../../resources/logosasml.png'
import cartImg from '../../resources/cartImg.png'
import { useDispatch, useSelector } from 'react-redux'
import ModalCart from './Cart/ModalCart'
import menuhamburguesa from '../../resources/menuhamburguesa.png'
import { Link, useNavigate } from 'react-router-dom'
import { toggleMenu } from '../../redux/user/userSlice'
import ModalUser from './ModalUser/ModalUser'

const Navbar = () => {   
    const navigate = useNavigate();
    
    const currentUser = useSelector(state => state.user.currentUser);

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)
  return (
    <header>
        <img src= {logosasml} alt="logo" className='logo' />
        <nav className='navbar'>
            <label htmlFor="menuToggle" className='menuLabel'>
                <div className='menuIcon'><img src={menuhamburguesa} alt=""/></div>
            </label>
            <input type="checkbox" id='menuToggle'/>
            <ModalUser/>
            <div className='navbarList'>
                <Link to='/' class="home">Inicio</Link>
                <a href="/#CarList">Coches</a>
                <a href="/#aboutUs">Nosotros</a>
                <a href="/#contactUs">Contactanos</a>                
            </div>                
            <div onClick={() =>currentUser ? dispatch(toggleMenu()): navigate('/Login')}>                   
                {
                    currentUser ? `${currentUser.email.slice(0, 10)}...` : 'Iniciar sesion'
                }
            </div>

            <label for="cartToggle" class="cartLabel">
                <div class="cartIcon"><img src={cartImg} alt="" /></div>                
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