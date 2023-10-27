import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getOrders } from '../../axios/axiosOrders';
import { clearError, fetchOrdersFail } from '../../redux/orders/ordersSlice';
import './OrdersStyle.css'

import CardsOrders from './CardsOrders';

const Orders = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.user.currentUser)

    const {orders, error} = useSelector(state => state.orders);

    useEffect(() => {
        if (!orders) {
            getOrders(dispatch, currentUser);
        }

        if (!currentUser?.token) {
            dispatch(fetchOrdersFail());
        } else {
            error && dispatch(clearError());
        }

    }, [currentUser?.token, orders, error])

  return (
    <>
        {/* <div className='Orders'>Orders</div> */}
        <div className='Orders'> 
            <h2 className="ordersTitle">Tus Reservas</h2>
            <CardsOrders/>        
        </div>
    </>
    
  )
}

export default Orders