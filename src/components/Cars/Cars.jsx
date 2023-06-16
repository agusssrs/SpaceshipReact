import React from 'react'
import allCars from '../../data/data.js'
import CarsList, { carListed } from './CarsList.jsx'


const Cars = () => {
  return (
    allCars.forEach((coches) =>{
        
        div.CarsList.add('coches');
        <div className='carCard'>
            <img src={coches.carImg} alt="" />
            <h2>{coches.brand+' '+coches.model}</h2>
            <p className='carKm'>{coches.km}</p>
            <p className='carPice'>{coches.price}</p>
            <a className='rsvBtn' id={coches.id}>Reservar</a>
        </div>

        carListed.appendChild(CarsList);
    }) 
  )
}

export default Cars