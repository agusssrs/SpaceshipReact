import React from 'react'
import './Hero.css'
import logosps from '../../../resources/logosps.jpeg'


const Hero = () => {
  return (
    <section id='hero'>
        <div class="heroText">
                <h1>Spaceship Agency</h1>
                <p>¿Estas buscando un buen auto? 
                    No te preocupes, entraste en el lugar indicado.
                    Acá no compras un auto, compras una nave.
                </p>
                <a href="#CarList">Ver naves</a>
            </div>
            <div class="heroCard">
                <img src={logosps} alt="" />
            </div>

            
                <div class="heroText2H1">
                    <h2>Spaceship Agency</h2>
                </div>
                <div class="heroCard2">
                    <img src={logosps}  alt="" />
                </div>
                <div class="heroText2">
                    <p>¿Estas buscando un buen auto? 
                        No te preocupes, entraste en el lugar indicado.
                        Acá no compras un auto, compras una nave.
                    </p>
                    <a href="#CarList">Ver naves</a>
                </div>
    </section>
  )
}

export default Hero