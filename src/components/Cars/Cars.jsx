import React from 'react'
import allCars from '../../data/data.js'



const Cars = () => {
  return (
    allCars.map ((coches) =>{
      return (  
        <div key={coches.id}className='carCard'>
            <img src={coches.carImg} alt="" />
            <h2>{coches.brand+' '+coches.model}</h2>
            <p className='carKm'>{coches.km}</p>
            <p className='carPice'>{coches.price}</p>
            <a className='rsvBtn' id={coches.id}>Reservar</a>
        </div>
      )
        
    }) 
  )
}

export default Cars