import React from 'react'
import './Main.css'
import Hero from './Hero/Hero'
import CarsList from '../Cars/CarsList'
import Cars from '../Cars/Cars'


const Main = () => {
  return (
    <div>
      <Hero/>
      <div>
        <CarsList>
          <Cars/>  
        </CarsList>
      </div>
    </div>
    
  )
}

export default Main