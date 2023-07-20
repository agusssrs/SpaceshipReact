import React from 'react'
import { useDispatch } from 'react-redux'
import {removeFromCart } from '../../../redux/cart/cartSlice'
import trash from '../../../resources/trash.svg'
import '../../../components/mediasqueries.css'


const ModalCartCard = ({carImg,model,brand,prePurchase,id}) => {
  const dispatch = useDispatch();
  return (
    <>
    
    <div className='cartItem'>
        <img src={carImg} alt="" />
        <div className='carInfo'>
          <h2 className='carModel'>{model}</h2>
          <h3 className='carBrand'>{brand}</h3>
          <p className='price'>U$D {prePurchase}</p>
        </div>
        <div className='quantityHandler'>
          <span className='trashBtn' onClick={()=> dispatch(removeFromCart(id))}>
            <img src={trash} alt="" />
          </span>
        </div>
    </div>
    {/* <span class="endCartList"></span>
    <div class="totalCart">
      <p>Total:$</p>
      <span>{totalPrice}</span>
    </div>
    <button class="btnBuy">Reservar</button>
    <button class="cartDlt" onClick={useDispatch}>Vaciar</button> */}
    </>
  )
}

export default ModalCartCard