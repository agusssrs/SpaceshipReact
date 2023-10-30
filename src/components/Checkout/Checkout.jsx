import React from 'react'
import CheckoutForm from './Form/CheckoutForm'
import CheckoutProducts from './Products/CheckoutProducts'
import { useSelector } from 'react-redux'
import './CheckoutStyles.css'

const Checkout = () => {
    const {cartItems} = useSelector(state => state.cart);

    const price = cartItems.reduce((acc, item) => {
        return (acc += item.prePurchase * item.quantity)
    }, 0)

  return (
    <div className="ordersMain">
        <div className='Checkout'>
            <CheckoutForm
                cartItems={cartItems}
                price={price}
            />
            <CheckoutProducts
                cartItems={cartItems}
                price={price}
            />
        </div>
    </div>

  )
}

export default Checkout