import React from 'react'
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { createOrder } from '../../../axios/axiosOrders';
import { clearCart } from '../../../redux/cart/cartSlice'


const checkOutInitialValues = {
    email: '',
    cellphone: '',
    address:'',
    cardNumber:''
}

const checkOutSchema = Yup.object({
    email: Yup.string().email('Ingrese un email válido.').required('El email es obligatorio.'),
    cellphone: Yup.string().required('El telefono es obligatorio.'),    
    address: Yup.string().required('La dirección es obligatoria.'),
    cardNumber: Yup.string().required('Los datos de la tarjeta son obligatorios.')
})

const CheckoutForm = ({cartItems, price, prePurchase}) => {
    const dispatch = useDispatch();

    // const navigate = useNavigate();

    const {currentUser} = useSelector(state => state.user);

  return (
    <div className='chekoutForm'>
        <h2>Ingresa tus datos para completar la reserva de tu nave 🚀</h2>
        <Formik
            initialValues={checkOutInitialValues}
            validationSchema={checkOutSchema}
            onSubmit={ async (values) => {
                const orderData = {
                    items: cartItems,
                    price,
                    prePurchase,
                    total: prePurchase,
                    finishOrder:{
                        ...values
                    }
                };

                try {
                    await createOrder(orderData, dispatch, currentUser);
                    // navigate('/gracias')
                    dispatch(clearCart())
                } catch (error) {
                    console.log(error);
                    alert('Ocurrió un error al crear su reserva')
                }
            }}
        >
            {
                ({isSubmitting}) => (


                    <Form className='checkoutForm'>
                        Tu email <input htmlFor='email' type='email' id='email' name='email' placeholder='spaceshipagency@gmail.com'/>
                        Tu telefono <input htmlFor='cellphone' type="number" id='cellphone' name='cellphone' placeholder='1136364747'/>
                        Tu direccion <input htmlFor='address' type="text" id='address' name='address' placeholder='Avenida Libertador 2799'/>               
                        Tu numero de tarjeta <input htmlFor='cardNumber' type='number' id='cardNumber' name='cardNumber' placeholder='4646575768687979'/>
                        <div>
                            <button type="submit" disabled={!cartItems.length}>{isSubmitting ? 'cargando...' :  'Pagar'}</button>
                        </div>
                    </Form>
                )               
            }
            
        </Formik>
    </div>
  )
}

export default CheckoutForm