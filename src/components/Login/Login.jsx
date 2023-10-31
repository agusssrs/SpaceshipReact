// import React, { useState } from 'react'
// import './Login.css'
// import { Link,useNavigate } from 'react-router-dom';



// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorEmail, setErrorEmail] = useState('');
//     const [errorPassword, setErrorPassword] = useState('')
//     const navigate = useNavigate();

//     const validatePassword = (value) =>{
//         setPassword(value);
//         if (value === ''){
//             setErrorPassword('Completa este campo')
//         }
//     }

//     const validateEmail = (value) => {
//         setEmail(value);
//         if (value === ''){
//             setErrorEmail('Completa este campo')
//         }

        
//     }

//     const validate = () =>{
//         if(email !== '' && password !== ''){
//             navigate("/");
//         }

//     }

    
//   return (
//     <section id="iniciosesion">
//     <div id='logoInicioSesion'><h2>Spaceship Agency</h2></div>
//     <div class="formularioLogin">
//         <h2>Inicia sesion</h2>
//         <form method="post">
//             <div class="e-mail">
//                 <label for="email">Tu e-mail</label>
//                 <input type="email" id="email" value={email} onChange={(e)=> validateEmail(e.value)} required/>
//                 {errorEmail !== '' && <span>{errorEmail}</span>}
//             </div>
//             <div class="contraseña">
//                 <label for="password">Contraseña</label>
//                 <input type="password" id="password" value={password} onChange={(e)=> validatePassword(e.value)} required/>
//                 {errorPassword !== '' && <span>{errorPassword}</span>}
//             </div>
            
//             <button class="signIn" onClick={validate}>Inicia sesion</button>
//             <div class="registrarse">
//                 Si no tenés cuenta, registrate <Link to='/Register'>clickeando acá</Link>
//             </div>
//         </form>
//     </div>
// </section>
//   )
// }

// export default Login




import React, {useState} from 'react';
import './Login.css';
import { Field, Form, Formik } from 'formik'
import axios from 'axios';
import * as Yup from 'yup';
import { BASE_URL } from '../../utils/constants';
import { Link, useNavigate } from 'react-router-dom';
// import { loginUser } from '../../axios/axiosUser';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userSlice';





const Login = () => {
    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    const initialValues = {
        email:'',
        password:''
    }
    
    const validationSchema = Yup.object({
        email: Yup.string().email('Ingrese un email válido.').required('El email es obligatorio'),
        password: Yup.string().min(8, 'la contraseña debe tener minimo 8 caracteres.').required('La contraseña es obligatoria'),
    });   

    // const onSubmit = async (email, password, token) => {
    //     try {
    //         const response = await axios.post(`${BASE_URL}auth/login`, email, password, token);
    //         console.log(response);
    //         navigate('/')
    //     } catch (error) {
    //         if(error.response.status === 404) {
    //             alert('El email no se encuntra en la base de datos.')
    //         }
    //     }
  
    //     // const navigate = useNavigate();
    //     // navigate.push('/');
    //   }    

    const [botonActivo, setBotonActivo] = useState(true);

    const handleBotonActivo = (actual) => {
        setBotonActivo(actual);
    };

    const loginUser = async (email, password) => {
        try {
            handleBotonActivo(false);
            const response = await axios.post(`${BASE_URL}auth/login`, {email, password});
            navigate('/')
            return response.data
           
        } catch (error) {
            handleBotonActivo(true);
            console.log(error);
        }
    }
    
  return (
    <section id="iniciosesion">
        <div id='logoInicioSesion'><h2>Spaceship Agency</h2></div>
        <div className="formularioLogin">
            <h2>Inicia sesion</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    const user = await loginUser(values.email, values.password);
                    console.log(user);   
                    
                    if (user) {
                        dispatch(setCurrentUser({
                            ...user.usuario,
                            token: user.token
                        }))
                    }
                }} 
            >

            {({errors, touched}) => (
                <Form>
                    <div class="email">
                        <label htmlFor="email">Tu email:</label>
                        <Field type="email" name="email" id="email" className='emailFieldLogin'/>
                        {errors.email && touched.email ? (<div className='errors'>{errors.email}</div>) : null}  
                    </div>

                    <div className="password">
                        <label htmlFor="password">Tu password: </label>
                        <Field type="password" name="password" id="password" className='passwordFieldLogin'/>
                        {errors.password && touched.password ? (<div className='errors'>{errors.password}</div>) : null}
                    </div>

                    
                    {botonActivo ? <button type="submit" className="signIn">Inicia sesion</button> : null}

                    <div class="registrarse">
                        Si no tenés cuenta, registrate <Link to='/Register' className='registerLink'>clickeando acá</Link>
                    </div>
                </Form>
            )}
            </Formik>
        </div>
    </section>
  )
}

export default Login