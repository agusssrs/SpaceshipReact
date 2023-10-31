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