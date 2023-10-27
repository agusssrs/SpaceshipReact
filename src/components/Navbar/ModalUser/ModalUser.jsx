import React from 'react'
import {setCurrentUser, toggleMenu} from '../../../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ModalUser = () => {
    const {currentUser, hiddenMenu} = useSelector(state => state.user);

    const dispatch = useDispatch();

  return (
    <div>
        {!hiddenMenu && (
            <div className="modalContainer">
                <h2 className='modalUserTitle'>{currentUser?.email}</h2>
                <Link to='/Orders' className="toOrders" onClick={()=>{dispatch(toggleMenu())}}>Tus reservas</Link>
                {/* < onClick={() => {dispatch(setCurrentUser(null)) ,  dispatch(toggleMenu())}}></> */}
                <span onClick={() => {
                    dispatch(setCurrentUser(null))
                    dispatch(toggleMenu())
                }}>Cerrar sesion</span>
            </div>
        )}
    </div>
  )
}

export default ModalUser