import React from 'react'
import { useSelector } from 'react-redux'
import Cardorders from './Cardorders'

const CardsOrders = () => {
    const {orders, loading, error} = useSelector(state => state.orders);
    if (loading && !orders) {
        return 'cargando...'
    }

    if (error) {
        return <h2> {error} </h2>
    }


  return (
    <>
    <div>
        {
            orders?.length?(
                orders.map((order) => {
                    return <Cardorders {...order} key={order._id}/>
                })
            ):(
                <h2>No tenes ninguna orden</h2>
            )
        }
    </div>
    </>
    
    

    
  )
}

export default CardsOrders