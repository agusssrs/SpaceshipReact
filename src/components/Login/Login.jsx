import React, {useState} from 'react';
import './Login.css';
import { Field, Form, Formik } from 'formik'
import axios from 'axios';
import * as Yup from 'yup';
import { BASE_URL } from '../../utils/constants';
import { Link, useNavigate } from 'react-router-dom';
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
            if(error.response.status === 404) {
                alert('El email no se encuntra en la base de datos. Por favor, intentelo nuevamente.')
            }
            if(error.response.status === 401) {
                alert('La contraseña es incorrecta. Por favor, intentelo nuevamente.')
            }
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