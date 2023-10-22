import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartSlice.js'
import Swal from 'sweetalert2';

const Cars = (props) => {
  const formatNumberWithDots = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  const alert = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: '#3a3e4b',
      color: '#ff914d'
    })
    Toast.fire({
      icon: 'success',
      iconColor: '#ff914d',
      title: '¡Tu coche se agregó al carrito de reservas!'
    })
  }
  const handleReservation = (coches) => {
    dispatch(addToCart({ ...coches }))
    alert()
  }
  const dispatch = useDispatch();
  return (
    
      props.list.map((coches) => {
        return(
          <div key={coches.id} className='carCard'>
          <img src={coches.carImg} alt="" />
          <h2>{coches.brand + ' ' + coches.model}</h2>
          <p className='carKm'>{coches.km}</p>
          <p className='carPice'>{`U$D ${formatNumberWithDots(coches.price)}`}</p>
          <button className='rsvBtn' id={coches.id} onClick={() => handleReservation(coches)}>Reservar</button>
        </div>
        )
    })

    
  )
}

export default Cars