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



import React, { Component } from 'react';
import axios from 'axios';
import {BASE_URL} from '../../utils/constants'
import './Register.css'
import {regEmail} from '../../utils/regularExpression'
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password,
      validation: regEmail
    };

    const validation = () =>{
      if (!regEmail) {
        return(
            <p>ingrese email</p>
        ) 
    }
    } 
    
    axios.post(`${BASE_URL}auth/register`, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
        <section id="registro">
            <div id='logoInicioSesion'><h2>Spaceship Agency</h2></div>

            <div className="formulario">
              <h2>Registrate</h2>
                <form method='post' onSubmit={this.handleSubmit}>
                    <div className="email">
                        <label for="email">Tu email:</label>                                   
                        <input name='email' type="text" id="email" value={this.state.email} onChange={this.handleEmailChange} onClick={data.validation} required/> 
                    </div>
                                       
                    <div className="contraseña">
                        <label for="password">Contraseña:</label>                            
                        <input name='password' type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} required/>
                                           
                    </div>
                    
                    <button type="submit" className="signUp">Register</button>
                </form>
            </div>
            
            
        </section>
      
    );
  }
}

export default Register