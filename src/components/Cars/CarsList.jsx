import React from 'react'
import Cars from './Cars'

const CarsList = () => {
  return (
    <section className='carList'>
      <h2 className='carListTitle'>Todas las naves</h2>
        <div className='carList'>
            <Cars/> 
       </div>
    </section>
  )
}

export default CarsList