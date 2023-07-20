import React from 'react'
import './Cars.css'
import Cars from './Cars'
import '../mediasqueries.css'

const CarsList = () => {
  return (
    <section id='CarList'>
      <h2 className='carListTitle'>Todas las naves</h2>
        <div className='carList'>
            <Cars/> 
       </div>
    </section>
  )
}

export default CarsList