import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/cart/cartSlice';
import trash from '../../../resources/trash.svg'
import './CardCheckoutProducts.css'

export const formatNumberWithDots = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

const CardCheckoutProducts = ({carImg,model,brand,prePurchase,id}) => {
    const dispatch = useDispatch();

  return (
    <div className='CardCheckoutProducts'>
        <div className="cardImg"><img src={carImg} alt="" /></div>
        <div className="cardInfo">
            <h2 className='carBrand'>{brand}</h2>
            <h2 className='carModel'>{model}</h2>            
            <p className='price'>{`U$D ${formatNumberWithDots(prePurchase)}`}</p>
        </div>
        <div className='quantityHandler'>
          <span className='trashBtnCheckout' onClick={()=> dispatch(removeFromCart(id))}>
            <p className='delete'>Eliminar </p><img src={trash} alt="" />
          </span>
        </div>
    </div>
  )
}

export default CardCheckoutProducts