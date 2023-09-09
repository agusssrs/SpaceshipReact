import React, { useEffect, useState } from 'react'
import './Cars.css'
import allCars from '../../data/data.js';
import Cars from './Cars'

const CarsList = () => {
  const [sortedList, setSortedList] = useState([...allCars]);

  const handleSort = (keyName, order) => {
    const sorted = [...allCars].sort((a, b) => {
      if (order === 'asc') {
        return a[keyName] < b[keyName] ? -1 : 1;
      }
      if (order === 'desc') {
        return a[keyName] > b[keyName] ? -1 : 1;
      }
    });
    setSortedList(sorted);
  };

  return (
    <section id='CarList'>
      <h2 className='carListTitle'>Todas las naves</h2>
      <label htmlFor="filterToggle" className='filterLabel'>
          <p>Ordenar por:</p>
      </label>
      <input type="checkbox" id='filterToggle'/>
      <div className='filter'>
        <button className='brandFilter' id='aTo' onClick={()=> handleSort ('brand', 'asc')}>A-Z Marca</button>
        <button className='brandFilter' id='zToa' onClick={()=> handleSort ('brand', 'desc')}>Z-A Marca</button>
        <button className='modelFilter' id='aTozModels' onClick={()=> handleSort ('model', 'asc')}>A-Z Modelo</button>
        <button className='modelFilter' id='zToaModels' onClick={()=> handleSort ('model', 'desc')}>Z-A Modelo</button>
        <button className='priceFilter' id='+To-' onClick={()=> handleSort ('price', 'desc')}>+ a - precio</button>
        <button className='priceFilter' id='-To+' onClick={()=> handleSort ('price', 'asc')}>- a + precio</button>
      </div>
      <div className='carList'>
         <Cars list = {sortedList}/>
      </div>
    </section>
  )
}



export default CarsList