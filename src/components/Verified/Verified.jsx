import React, {useEffect} from 'react'
import { Field, Form, Formik } from 'formik'
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

    const verifyUser = async (email, code) => {
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
                onSubmit={async (values) => {
                  const user = await verifyUser(values.email, values.code);
                  console.log(user);
                }}
            >
                <Form>
                    <div className="email">
                        <label htmlFor='email'>Tu email</label>
                        {/* <input type="email" name="email" id="email" value={email} readOnly/> */}
                        <Field type="email" name="email" id="email" value={email} readOnly/>
                    </div>
                    
                    <div className="verified">
                        <label htmlFor='verified'>Codigo de verificacion</label>
                        {/* <Field name="code" id="code"/> */}
                        {/* <input type="text" name='code' id='code' /> */}
                        <Field type="text" name='verified' id='verified'/>
                    </div>

                    <button type='submit' className='verifiedBtn'>Verificate</button>
                </Form>
            </Formik>
        </div>
    </section>
  )
}

export default Verified