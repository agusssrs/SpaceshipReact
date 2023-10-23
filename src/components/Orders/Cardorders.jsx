import React from 'react'
import { formatNumberWithDots } from '../Cars/Cars';
import { useNavigate } from 'react-router-dom';

export const formatDate = (date) => {
    const fecha = date?.split('T')[0];
    const fechaLegible = fecha?.split('-').reverse().join('/');
    const hora = date?.split('T')[1].split('.')[0];
    const horaLegible = hora?.split(':').slice(0, 2).join(':');
    return `${fechaLegible} ${horaLegible}`;
};



const Cardorders = ({createdAt, total, _id}) => {

  const navigate = useNavigate()

  return (
    <div onClick={navigate(`/${_id}`)}>
      <div>
          <h2>ID de orden: {_id.slice(0,5)}</h2>
          <p>Fecha {formatDate(createdAt)}hs</p>
          <p>{formatNumberWithDots(total)}</p>
      </div>
    </div>    
  )
}

export default Cardorders