import React from 'react'
import { formatNumberWithDots } from '../Cars/Cars';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './OrdersStyle.css'


export const formatDate = (date) => {
    const fecha = date?.split('T')[0];
    const fechaLegible = fecha?.split('-').reverse().join('/');
    const hora = date?.split('T')[1].split('.')[0];
    const horaLegible = hora?.split(':').slice(0, 2).join(':');
    return `${fechaLegible} ${horaLegible}`;
};



const Cardorders = ({createdAt, total, _id, items}) => {  

  return (
    <div > 
      <div className='cardsContainer'>
          <h2>ID de orden: {_id.slice(0,5)}</h2>
          <p>Fecha {formatDate(createdAt)}</p>
          {/* <p>{formatNumberWithDots(total)}</p> */}
          <div className='imgContainer'>
            {
              items.slice(0,6).map(
                  (item) => {
                    return <div className='fotos'><img src={item.carImg} alt="" /></div>
                  }                              
                )                        
            }

          </div>
           
                              
      </div>
    </div>    
  )
}

export default Cardorders