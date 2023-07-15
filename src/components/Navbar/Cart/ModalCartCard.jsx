import React from 'react'
import { useDispatch } from 'react-redux'
import allCars from '../../../data/data'
import {removeFromCart } from '../../../redux/cart/cartSlice'
import trash from '../../../resources/trash.svg'

const ModalCartCard = ({img,model,brand,price}) => {
  const dispatch = useDispatch
  return (
    <>
    {allCars}
    <div className='cartItem'>
        <img src={img} alt="" />
        <div className='carInfo'>
          <h2 className='carModel'>{model}</h2>
          <h3 className='carBrand'>{brand}</h3>
          <p className='price'>{price}</p>
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