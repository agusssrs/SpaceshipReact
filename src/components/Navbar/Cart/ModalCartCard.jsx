import React from 'react'
import { useDispatch } from 'react-redux'
import {removeFromCart } from '../../../redux/cart/cartSlice'
import trash from '../../../resources/trash.svg'



const ModalCartCard = ({carImg,model,brand,prePurchase,id}) => {
  const formatNumberWithDots = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  const dispatch = useDispatch();
  return (
    <>
    
    <div className='cartItem'>
        <img src={carImg} alt="" />
        <div className='carInfo'>
          <h2 className='carModel'>{model}</h2>
          <h3 className='carBrand'>{brand}</h3>
          <p className='price'>{`U$D ${formatNumberWithDots (prePurchase)}`}</p>
        </div>
        <div className='quantityHandler'>
          <span className='trashBtn' onClick={()=> dispatch(removeFromCart(id))}>
            <img src={trash} alt="" />
          </span>
        </div>
    </div>
    </>
  )
}

export default ModalCartCard