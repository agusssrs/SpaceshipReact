import React from 'react'
import './Thanks.css'
import { useNavigate } from 'react-router-dom'

const Thanks = () => {
    const navigate = useNavigate() 

  return (
    <section id='Thanks'>
        <div className='thanksTitle'>
            <h2>Spaceship Agency</h2>
        </div>
        <div className='thanksContainer'>
            <div className='thanksTextContainer'>
                <p>Tu nave fue reservada con exito 👨‍🚀🚀</p>
                <p>Muchas gracias por confiar en nosotros 🧡.</p>                
            </div>
            <button className='thanksBtn' onClick={() => navigate('/')}> Volver a inicio</button>                                                   
        </div>
    </section>
  )
}

export default Thanks