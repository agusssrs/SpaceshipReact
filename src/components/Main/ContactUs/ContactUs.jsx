import React from 'react'
import './ContactUs.css'
import location from '../../../resources/logos-redes/location.png'
import instagram from '../../../resources/logos-redes/instagram.png'
import whatsapp from '../../../resources/logos-redes/whatsapp.png'
import schedule from '../../../resources/logos-redes/schedule.png'
import '../../mediasqueries.css'

const ContactUs = () => {
  return (
    <section id='contactUs'>
            <h2 className='contactTitle'>Ante cualquier duda podes consultarnos en nuestras redes sociales:</h2>
            <div className='redes'>    
                <div className='instagram' id='instagram'>   
                    <img src= {instagram} alt="logoig" className='logoinsta'/>
                    <p class="texto-insta">@spaceship.agcy</p>
                </div>
                <div className='whatsapp' id='whatsapp'>
                    <img src= {whatsapp} alt="logowpp" className='logowhatsapp'/>
                    <p class="texto-whatsapp">+54 9 11 3879-1992</p>
                </div>
                <div className='location' id='location'>
                    <img src= {location} alt="" className='location'/>
                    <p class="direccion">Estamos ubicados en Avenida Libertador 2799, Palermo</p>
                </div>
                <div className='schedules' id='schedules'>
                    <img src= {schedule} alt="" className='horaydia'/>
                    <p>De Lunes a Viernes de 9am a 17pm y Sabados de 9am a 13pm</p>
                </div>
            </div>
    </section>
  )
}

export default ContactUs