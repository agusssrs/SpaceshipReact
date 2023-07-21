import React, {useState} from 'react'
import './Register.css'
import logosabig from '../../resources/logosabig.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('')
    const navigate = useNavigate();

    const validatePassword = (value) =>{
        setPassword(value);
        if (value === ''){
            setErrorPassword('Completa este campo')
        }
    }

    const validateEmail = (value) => {
        setEmail(value);
        if (value === ''){
            setErrorEmail('Completa este campo')
        }

        
    }

    const validate = () =>{
        if(email !== '' && password !== ''){
            navigate("/");
        }

    }

  return (
    <section id="registro">
    <div id='logoInicioSesion'><h2>Spaceship Agency</h2></div>
    <div class="formulario">
        <h2>Registrate</h2>
        <form method="post">
            <div class="e-mail">
                <label for="email">Tu e-mail</label>
                <input type="email" id="email" value={email} onChange={(e)=> validateEmail(e.value)} required/>
                {errorEmail !== '' && <span>{errorEmail}</span>}
            </div>
            <div class="contraseña">
                <label for="password">Contraseña</label>
                <input type="password" id="password" value={password} onChange={(e)=> validatePassword(e.value)} required/>
                {errorPassword !== '' && <span>{errorPassword}</span>}
            </div>
            <button class="signUp" onClick={validate}>Crear cuenta</button>
        </form>
    </div>
</section> 
  )
}

export default Register