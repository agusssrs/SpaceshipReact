import React from 'react'
import './Main.css'
import Hero from './Hero/Hero'
import CarsList from '../Cars/CarsList'
import Cars from '../Cars/Cars'
import AboutUs from './AboutUs/AboutUs'
import ContactUs from './ContactUs/ContactUs'


const Main = () => {
  return (
    <div>
      <Hero/>
      <div>
        <CarsList>
          <Cars/>  
        </CarsList>
      </div>
      <AboutUs/>
      <ContactUs/>
    </div>
    
  )
}

export default Main