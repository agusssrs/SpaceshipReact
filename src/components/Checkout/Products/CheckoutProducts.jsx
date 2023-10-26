import React from 'react'
import CardCheckoutProducts, { formatNumberWithDots } from './CardCheckoutProducts'
import '../CheckoutStyles.css'


const CheckoutProducts = ({cartItems, price}) => {
    
  return (
    <div className='CheckoutProducts'>
        <h2 className='ordersTitle'>Tus reservas</h2>
        <div className='checkoutProductsWrp'>
            {
                cartItems.length ? (
                    cartItems.map((item) => {
                        return <CardCheckoutProducts {...item} key={item.id}/>
                    })
                ) : (
                    <p>No tenes ninguna reserva</p>
                )
            }
        </div>
        <span className='totalCheckOut'>
            <p>{`Total: U$D ${formatNumberWithDots(price)}`}</p>
        </span>
    </div>
  )
}

export default CheckoutProducts