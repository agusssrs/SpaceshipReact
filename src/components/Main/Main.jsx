import React from 'react'
import './Main.css'
import Hero from './Hero/Hero'
import CarsList from '../Cars/CarsList'
import Cars from '../Cars/Cars'
import AboutUs from './AboutUs/AboutUs'
import ContactUs from './ContactUs/ContactUs'
import logofooter from '../../resources/logofooter.png'



const Main = () => {
  return (
    <main>
      <Hero/>
      <>
        <CarsList>
          <Cars/>  
        </CarsList>
      </>
      <AboutUs/>
      <ContactUs/>
      <footer><img src={logofooter} alt="" className='footerimg'/></footer>
    </main>
    
  )
}

export default Main