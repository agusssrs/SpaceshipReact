import React from 'react'

const CheckoutProducts = ({cartItems, price}) => {
  return (
    <div className='CheckoutProducts'>
        <h2>Tus reservas</h2>
        <div className='checkoutProductsWrp'>
            {
                cartItems.length ? (
                    cartItems.map((item) => {
                        
                    })
                ) : (
                    <p>No tenes ninguna reserva</p>
                )
            }
        </div>
    </div>
  )
}

export default CheckoutProducts