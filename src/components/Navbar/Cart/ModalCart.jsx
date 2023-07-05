import React from 'react'
import { useSelector } from 'react-redux'

const ModalCart = () => {
    const {cartItems} = useSelector(state => state.cart)
    const totalPrice = cartItems.reduce((acc, item)=>{
        return(acc += item.price *25 / 100)
    })
}  

return (
   <>
   </>     
  )


export default ModalCart