import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartSlice.js'
import Swal from 'sweetalert2';
import axios from 'axios';

export const formatNumberWithDots = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

const Cars = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://spaceship-api.vercel.app/products');
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);
  

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
  const handleReservation = (products) => {
    dispatch(addToCart({ ...products }))
    alert()
  }
  const dispatch = useDispatch();

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (

        products.map(product => (
          <div key={product.id} className='carCard'>
            <img src={product.carImg} alt="" />
            <h2>{product.brand + ' ' + product.model}</h2>
            <p className='carKm'>{product.km}</p>
            <p className='carPice'>{`U$D ${formatNumberWithDots(product.price)}`}</p>
            <button className='rsvBtn' id={product.id} onClick={() => handleReservation(product)}>Reservar</button>
          </div>
        ))
        


    )}

    
  
}
  


export default Cars