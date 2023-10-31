import React, {useEffect, useState} from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import { Navigate,useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';
import './Verified.css'


const Verified = () => {
    const navigate = useNavigate();
    const [botonActivo, setBotonActivo] = useState(true);

    const handleBotonActivo = (actual) => {
    setBotonActivo(actual);
  };
    const { email } = useParams();   

    const verifyUser = async ({email, code}) => {
      console.log(email,code);
        try {
          handleBotonActivo(false);
          const response = await axios.patch(`${BASE_URL}auth/verify`, {email, code});     
          navigate('/');
          return response.data

        } catch (error) {
          handleBotonActivo(true);
          console.log(error);
          if(error.response.status === 404) {
            alert('El usuario no se encuntra en la base de datos. Por favor, intentelo nuevamente.')
          }
          if(error.response.status === 400) {
            alert('El usuario ya fue verificado.')
          }
          if(error.response.status === 401) {
            alert('El codigo ingresado no es válido. Por favor, intentelo nuevamente.')
          }
        }    
    } 

    useEffect(() => {
        if (!email) {
          <Navigate to="/" />;
        }
    }, [email]);

  return (
    <section id='verified'>
        <div className='logoVerified'><h2>Spaceship Agency</h2></div>
        <div className='containerFormVerified'>
            <Formik
                initialValues={{
                  email:`${email}`,
                  code: ''                  
                }}
                onSubmit={async (values) => {
                  const user = await verifyUser(values);
                }}
            >
              {({errors, touched}) => (
                <Form className='formVerified'>
                  <Field type="email" name="email" id="email" value={email} readOnly >
                    {({ field, form: { errors, touched } }) => (
                      <div className="verifyEmailField">
                        <label htmlFor='email'>Tu email:</label>
                        <input type='email' id='email' placeholder='Email' isError={errors.email && touched.email} {...field} className='emailVerified' readOnly/>   
                        <ErrorMessage name='email'>
                          {(message) => <div>{message}</div>}
                        </ErrorMessage>
                      </div>
                    )}
                  </Field>

                  <Field type="text" name='code' id='code'>
                    {({ field, form: { touched } }) => (
                      <div className="verifyCodeField">
                          <label htmlFor='code'>Ingresa tu codigo de verificacion</label>
                          <input type="text" id='code' placeholder='Tu codigo' isError={touched.code} {...field} className='codeVerified'/>                              
                      </div>
                    )}  
                  </Field>                      
                  <div>
                    {botonActivo ? <button type='submit' className='verifiedBtn'>Verificate</button> : null}
                  </div>
                    
                </Form>
              )}                       
            </Formik>
        </div>
    </section>
  )
}

export default Verified