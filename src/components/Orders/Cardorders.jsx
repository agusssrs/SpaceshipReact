import React from 'react'
import { formatNumberWithDots } from '../Cars/Cars';

export const formatDate = (date) => {
    const fecha = date?.split('T')[0];
    const fechaLegible = fecha?.split('-').reverse().join('/');
    const hora = date?.split('T')[1].split('.')[0];
    const horaLegible = hora?.split(':').slice(0, 2).join(':');
    return `${fechaLegible} ${horaLegible}`;
};

const Cardorders = ({createdAt, total, _id}) => {
  return (
    <>
       <div>
        <div>
            <h2>ID de orden: {_id.slice(0,7)}</h2>
            <p>Fecha {formatDate(createdAt)}hs</p>
            <p>{formatNumberWithDots(total)}</p>
        </div>
    </div> 
    </>
    
  )
}

export default Cardorders