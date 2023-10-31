import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup';
import { createOrder } from '../../../axios/axiosOrders';
import { clearCart } from '../../../redux/cart/cartSlice'
import '../CheckoutStyles.css'
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    const {currentUser} = useSelector(state => state.user);

  return (
    <div className='ChekoutForm'>
        <h2>Ingresa tus datos para completar la reserva de tu nave 🚀</h2>
        <Formik
            initialValues={checkOutInitialValues}
            validationSchema={checkOutSchema}
            onSubmit={ async (values) => {
                const orderData = {
                    items: cartItems,
                    price,
                   
                    finishOrder:{
                        ...values
                    }
                };

                try {
                    await createOrder(orderData, dispatch, currentUser);
                    navigate('/thanks')
                    dispatch(clearCart())

                } catch (error) {
                    console.log(error);
                    alert('Ocurrió un error al crear su reserva')
                }
            }}
        >
            {
                ({isSubmitting, errors, touched}) => (
                    <>
                        <Form className='checkoutForm'>
                            <div className="checkoutFormGrid">
                                <div className="checkoutEmail">
                                    <p>Tu email</p>
                                    <Field type='email' id='email' name='email' placeholder='spaceshipagency@gmail.com' className='checkoutFormEmail'/>
                                    {errors.email && touched.email ? (<div className='checkoutFormerrors'>{errors.email}</div>) : null}
                                </div>
                            
                                <div className="checkoutCellphone">
                                    <p>Tu telefono</p>
                                    <Field type="number" id='cellphone' name='cellphone' placeholder='1136364747' className='checkoutFormCellphone'/>
                                    {errors.cellphone && touched.cellphone ? (<div className='checkoutFormerrors'>{errors.cellphone}</div>) : null}
                                </div>
                            
                                <div className="checkoutAdress">
                                    <p>Tu direccion</p>
                                    <Field type="text" id='address' name='address' placeholder='Avenida Libertador 2799' className='checkoutFormAddress'/>
                                    {errors.address && touched.address ? (<div className='checkoutFormerrors'>{errors.address}</div>) : null}
                                </div>
                            
                                <div className="checkoutCardNumber">
                                    <p>Tu numero de tarjeta</p>
                                    <Field type='number' id='cardNumber' name='cardNumber' placeholder='4646575768687979' className='checkoutFormCardNumber'/>
                                    {errors.cardNumber && touched.cardNumber ? (<div className='checkoutFormerrors'>{errors.cardNumber}</div>) : null}
                                </div>
                            </div>
                                                                                    
                            <div className="checkoutBtn">
                                <button type="submit" className='checkoutFormBtn' disabled={!cartItems.length}>{isSubmitting ? 'cargando...' :  'Pagar'}</button>
                            </div>
                        </Form>
                    
                    </>

                )               
            }
            
        </Formik>
    </div>
  )
}

export default CheckoutForm