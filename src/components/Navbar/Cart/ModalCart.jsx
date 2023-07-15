import React from 'react'
import { useSelector } from 'react-redux'
import ModalCartCard from './ModalCartCard'

const ModalCart = () => {
    const {cartItems} = useSelector(state => state.cart)
    const totalPrice = cartItems.reduce((acc, item)=>{
        
    })

    return(cartItems.length ? (
                cartItems.map((item) =>{
                    return <ModalCartCard {...item} key={item.id}/>
                })):(<p>No tenes reservas en el carrito</p>)     
    )
}  



export default ModalCart