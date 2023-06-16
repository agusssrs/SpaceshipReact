import React from 'react'
import Cars from './Cars'
export const carListed = document.querySelector('.carList');
const CarsList = () => {
  return (
    <section className='carList'>
        <carListed>
            <Cars/> 
        </carListed>
    </section>
  )
}

export default CarsList