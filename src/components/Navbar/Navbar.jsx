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
import { useState } from 'react'

const Navbar = () => {   
    const navigate = useNavigate();
    
    const currentUser = useSelector(state => state.user.currentUser);

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)

    const [expanded, setExpanded] = useState(false);
  return (
    <header>
        <img src= {logosasml} alt="logo" className='logo' />
        <nav className='navbar'>
            {/* <label htmlFor="menuToggle" className='menuLabel'>
                <div className='menuIcon'><img src={menuhamburguesa} alt=""/></div>
            </label>
            <input type="checkbox" id='menuToggle' /> */}
            <ModalUser/>

            <label htmlFor="menuToggle" className='menuLabel'>
                <div className='menuIcon'><img src={menuhamburguesa} alt=""/></div>
            </label>
            <input type="checkbox" id='menuToggle' />
            <div className='navbarList'>
                <ul className='navbarLinks'>
                    <li><Link to='/' class="home">Inicio</Link></li>
                    <li><a href="/#CarList">Coches</a></li>
                    <li><a href="/#aboutUs">Nosotros</a></li>
                    <li><a href="/#contactUs">Contactanos</a></li> 
                </ul>
                <div onClick={() =>currentUser ? dispatch(toggleMenu()): navigate('/Login')} className='userMenuMq1'>                   
                    {
                        currentUser ? `${currentUser.email.slice(0, 10)}...` : 'Iniciar sesion'
                    }
                </div>              
            </div>

            <div onClick={() =>currentUser ? dispatch(toggleMenu()): navigate('/Login')} className='userMenuMq2'>                   
                    {
                        currentUser ? `${currentUser.email.slice(0, 7)}...` : 'Iniciar sesion'
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