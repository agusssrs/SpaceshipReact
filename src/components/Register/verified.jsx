import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';



const verified = () => {
    const navigate = useNavigate();
    const { email } = useParams();


  return (
    <section className='verified'>
        <div id='logoVerified'><h2>Spaceship Agency</h2></div>
        <div className='formVerified'>
            <Formik>
                <Form>
                    <div className="email">
                        <label htmlFor='email'>Tu email</label>
                        <Field type="email" name="email" id="email"/>
                    </div>
                    
                    <div className="code">
                        <label htmlFor='text'>Codigo de verificacion</label>
                        <Field type="text" name="text" id="text"/>
                    </div>

                    <button type='submit' className='verifiedBtn'>Verificate</button>
                </Form>
            </Formik>
        </div>
    </section>
  )
}

export default verified