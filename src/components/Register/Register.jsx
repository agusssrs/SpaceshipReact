// import React from 'react'
// import './Register.css'
// import { ErrorMessage, Field, Formik } from 'formik';
// import { registerValues } from '../../Formik/initialValues';
// import { registerSchema } from '../../Formik/validationSchema';
// import { useNavigate } from 'react-router-dom';
// import { createUser } from '../../axios/axiosUser';

// const Register = ({email, password}) => {
    
//     const navigate = useNavigate();
//   return (
//     <>
    

//     <section id="registro">
    
//     <div id='logoInicioSesion'><h2>Spaceship Agency</h2></div>
        
//     <div class="formulario">
//         <Formik 
//             initialValues={registerValues}
//             validationSchema={registerSchema}
//             onSubmit={async (values, actions) => {
//                 const user = await createUser(values.email, values.password);
//                 actions.resetForm();
//                 console.log(user);
//             }}
//         >

//         <h2>Registrate</h2>
//         <form method="post">
//             <div class="e-mail">
//                 <label for="email">Tu e-mail</label>
//                 <Field name = {email}>
//                     {
//                         ({field, form: {errors, touched}}) => (
//                             <>
//                                 <input name="email" type="email" id="email" {...field} isError={errors[field.email] && touched[field.email]} required />
//                                 <ErrorMessage name = {field.email}>
//                                     {message => <p className='errorMessage'>{message}</p>}
//                                 </ErrorMessage>
//                             </>
//                         )
//                     }
                    
//                 </Field>
                
//             </div>
//             <div class="contraseña">
//                 <label for="password">Contraseña</label>
//                 <Field name = {password}>
//                     {
//                         ({field, form: {errors, touched}}) => (
//                             <>
//                                 <input name= "password" type="password" id="password" {...field} isError = {errors[field.password] && touched[field.password]} required/>                
//                                 <ErrorMessage>
//                                     {message => <p className='errorMessage'>{message}</p>}
//                                 </ErrorMessage>
//                             </>
//                         )
//                     }
//                 </Field>
                
//             </div>
//             <button class="signUp">Crear cuenta</button>
//         </form>
//         </Formik>
//     </div>
        
// </section>
// </> 
//   )
// }

// export default Register



// import React, { Component } from 'react';
// import axios from 'axios';
// import {BASE_URL} from '../../utils/constants'
// import './Register.css'
// import {regEmail} from '../../utils/regularExpression'
// import { useState } from 'react';
// import { Formik } from 'formik';
// class Register extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: '',
//       errorEmail: ''
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleEmailChange = this.handleEmailChange.bind(this);
//     this.handlePasswordChange = this.handlePasswordChange.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     const data = {
//       email: this.state.email,
//       password: this.state.password
//     };

//     const validation = (email) => {
//       if (!email.match(regEmail)) {
//         console.log('mail invalido.');
//         return(
//             <p>ingrese un email válido.</p>
//         ) 
//       } else {
//       console.log('Mail valido');

//       }
//     } 
    
//     axios.post(`${BASE_URL}auth/register`, data)
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.log(error);
//       });   
//   }

//   handleEmailChange(event) {
//     this.setState({ email: event.target.value });
//     if (!event.target.value.match(regEmail)) {
//       console.log('mail invalido.');
//       this.setState({ errorEmail: "Email no válido." });
//     } else {
//     console.log('Mail valido');
//     this.setState({ errorEmail: "" });

//     }    
//   }

//   handlePasswordChange(event) {
//     this.setState({ password: event.target.value });
//   }

//   const [errorEmail, setErrorEmail] useState('')

//   render() {
//     return (
//         <section id="registro">
//             <div id='logoInicioSesion'><h2>Spaceship Agency</h2></div>
//               <div className="formulario">
//                 <h2>Registrate</h2>
//                   <form method='post' onSubmit={this.handleSubmit}>
//                       <div className="email">
//                           <label for="email">Tu email:</label>                                   
//                           <input name='email' type="text" id="email" value={this.state.email} onChange={this.handleEmailChange} required/> 
//                       </div>
//                       <div className='errorEmail'>{this.errorEmail}</div>             
//                       <div className="contraseña">
//                           <label for="password">Contraseña:</label>                            
//                           <input name='password' type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} required/>                     
//                       </div>
                      
//                       <button type="submit" className="signUp">Register</button>
//                   </form>
//               </div>              
//         </section>
//     );
//   }
// }

// export default Register


import React, {useState} from 'react'
import './Register.css'
import { Field, Form, Formik } from 'formik'
import axios from 'axios';
import * as Yup from 'yup';
import { BASE_URL } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    email:'',
    password:''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Ingrese un email válido.').required('Requerido'),
    password: Yup.string().min(8, 'la contraseña debe tener minimo 8 caracteres.').required('Requerido'),
  });

  // const onSubmit = async (values) => {
  //   try{
  //     await axios.post(`${BASE_URL}auth/register`, values);
  //   } catch (error) {
  //     console.log('ha ocurrido un error');
  //   }    
  // }

  const [botonActivo, setBotonActivo] = useState(true);

  const handleBotonActivo = (actual) => {
    setBotonActivo(actual);
  };

  const onSubmit = async (email, password, token) => {
    try {
      handleBotonActivo(false);
      const response = await axios.post(`${BASE_URL}auth/register`, email, password, token);
      console.log(response);      
      navigate(`/verified/${response.data.usuario.email}`);  

    } catch (error) {
      handleBotonActivo(true);
      if(error.response.status === 400) {
        alert('El email ya existe en la base de datos. Por favor, intentelo nuevamente.')
      }
    }

      // const navigate = useNavigate();
      // navigate.push('/');
  }
  
  return (
    <section id="registro">
      <div id='logoInicioSesion'><h2>Spaceship Agency</h2></div>
      <div className="formulario">
        <h2>Registrate</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({errors, touched}) => (
            <Form>
              <div className="email">
                <label htmlFor="email">Tu email:</label>
                <Field type="email" name="email" id="email" className="emailFieldRegister"/>
                {errors.email && touched.email ? (<div className='errors'>{errors.email}</div>) : null}
              </div>

              <div className="password">
                <label htmlFor="password">Tu password: </label>
                <Field type="password" name="password" id="password" className="passwordFieldRegister"/>
                {errors.password && touched.password ? (<div className='errors'>{errors.password}</div>) : null}
              </div>

              {botonActivo ? <button type="submit" className="signUp" > Registrarse </button> : null}
           
            </Form>
          )}
          
        </Formik>        
      </div>
    </section>
  )
}

export default Register