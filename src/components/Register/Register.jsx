import React from 'react'
import './Register.css'
import { ErrorMessage, Field, Formik } from 'formik';
import { registerValues } from '../../Formik/initialValues';
import { registerSchema } from '../../Formik/validationSchema';
import { useNavigate } from 'react-router-dom';

const Register = ({email, password}) => {
    
    const navigate = useNavigate();
  return (
    <section id="registro">
    
    <div id='logoInicioSesion'><h2>Spaceship Agency</h2></div>
        
    <div class="formulario">
        <Formik 
            initialValues={registerValues}
            validationSchema={registerSchema}
            onSubmit={(values) => console.log(values)}
        >

        <h2>Registrate</h2>
        <form method="post">
            <div class="e-mail">
                <label for="email">Tu e-mail</label>
                <Field name = {email}>
                    {
                        ({field, form: {errors, touched}}) => (
                            <>
                                <input name="email" type="email" id="email" {...field} isError={errors[field.email] && touched[field.email]} required />
                                <ErrorMessage name = {field.email}>
                                    {message => <p className='errorMessage'>{message}</p>}
                                </ErrorMessage>
                            </>
                        )
                    }
                    
                </Field>
                
            </div>
            <div class="contraseña">
                <label for="password">Contraseña</label>
                <Field name = {password}>
                    {
                        ({field, form: {errors, touched}}) => (
                            <>
                                <input name= "password" type="password" id="password" {...field} isError = {errors[field.password] && touched[field.password]} required/>                
                                <ErrorMessage>
                                    {message => <p className='errorMessage'>{message}</p>}
                                </ErrorMessage>
                            </>
                        )
                    }
                </Field>
                
            </div>
            <button class="signUp">Crear cuenta</button>
        </form>
        </Formik>
    </div>
        
</section> 
  )
}

export default Register