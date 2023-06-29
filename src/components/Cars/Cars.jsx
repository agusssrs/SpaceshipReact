import React from 'react'
import { useDispatch } from 'react-redux'
import allCars from '../../data/data.js'
import { addToCart } from '../../redux/cart/cartSlice.js'



const Cars = ({id,carImg,brand,model,km,price}) => {
  const dispatch = useDispatch()
  return (
    allCars.map ((coches) =>{
      return (  
        <div key={coches.id}className='carCard'>
            <img src={coches.carImg} alt="" />
            <h2>{coches.brand+' '+coches.model}</h2>
            <p className='carKm'>{coches.km}</p>
            <p className='carPice'>{coches.price}</p>
            <button className='rsvBtn' id={coches.id} onClick = {() => dispatch(addToCart ({...coches}))}>Reservar</button>
        </div>
      )
        
    }) 
  )
}

export default Cars