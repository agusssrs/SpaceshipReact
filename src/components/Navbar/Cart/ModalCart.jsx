import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../redux/cart/cartSlice';
import ModalCartCard from './ModalCartCard';
import Swal from 'sweetalert2';




const ModalCart = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart)
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setTotalPrice(cartItems.reduce((acc, item) =>
            acc + item.prePurchase, 0
        ))

    }, [cartItems]);
    const alert = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            background: '#3a3e4b',
            color:'#ff914d'
        })
        Toast.fire({
            icon: 'success',
            iconColor: '#ff914d',
            title: '¡Tu reserva fue realizada con exito!'
        })
    }
    return (cartItems.length ? (<>
        {cartItems.map((item) => {
            return <ModalCartCard {...item} key={item.id} />
        })}

        <span class="endCartList"></span>
        <div class="totalCart">
            <p>Total: U$D {totalPrice}</p>
        </div>
        <button class="btnBuy" onClick={() => dispatch (clearCart()) && alert()}>Reservar</button>
        <button class="cartDlt" onClick={() => dispatch(clearCart())}>Vaciar</button>
    </>

    ) : (<p>No tenes reservas en el carrito</p>)



    )


}



export default ModalCart