import React, {useEffect} from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import { Navigate,useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';



const Verified = () => {
    const navigate = useNavigate();
    const { email } = useParams();   


    // if (!email) {
    //     navigate('/');
    //     return null;
    //   }

    // if (!email) {
    //     return <Navigate to="/" />;
    // }

    const verifyUser = async ({email, code}) => {
      console.log(email,code);
        try {
          const response = await axios.patch(`${BASE_URL}auth/verify`, {email, code});     
          navigate('/');
          return response.data

        } catch (error) {
          // if(error.response.status === 400) {
          //   alert('El email ya existe en la base de datos. Por favor, intentelo nuevamente.')
          // }
          console.log(error);
        }
    
          // const navigate = useNavigate();
          // navigate.push('/');
    } 

    useEffect(() => {
        if (!email) {
          <Navigate to="/" />;
        }
    }, [email]);

  return (
    <section id='verified'>
        <div id='logoVerified'><h2>Spaceship Agency</h2></div>
        <div className='formVerified'>
            <Formik
                initialValues={{
                  email:`${email}`,
                  code: ''                  
                }}
                onSubmit={async (values) => {
                  const user = await verifyUser(values);
                  console.log(user);
                }}
            >
              {({errors, touched}) => (
                <Form>
                  <Field type="email" name="email" id="email" value={email} readOnly>
                    {({ field, form: { errors, touched } }) => (
                      <div className="email">
                        <label htmlFor='email'>Email verifición</label>
                        <input
                          type='email'
                          id='email'
                          placeholder='Email'
                          isError={errors.email && touched.email}
                          {...field}
                        />
                        <ErrorMessage name='email'>
                          {(message) => <div>{message}</div>}
                        </ErrorMessage>
                      </div>
                    )}
                  </Field>
                    {/* <div className="email"> */}
                        {/* <label htmlFor='email'>Tu email</label> */}
                        {/* <input type="email" name="email" id="email" value={email} readOnly/> */}
                        
                        {/* <ErrorMessage name='email'></ErrorMessage> */}
                    {/* </div> */}
                  <Field type="text" name='code' id='code'>
                    {({ field, form: { touched } }) => (
                      <div className="code">
                          <label htmlFor='code'>Codigo de verificacion</label>
                          <input 
                            type="text" 
                            id='code'
                            placeholder='code'
                            isError={touched.code}
                            {...field} 
                          />
                          

                      </div>
                    )}  
                  </Field>  
                    
                  <div>
                    <button type='submit' className='verifiedBtn'>Verificate</button>
                  </div>
                    
                </Form>
              )}  
             
                
            </Formik>
        </div>
    </section>
  )
}

export default Verified