import * as Yup from 'yup';
import {regEmail} from '../utils/regularExpression'

export const registerSchema = Yup.object({
    email: Yup.string().matches(regEmail).required('Por favor ingrese un email válido.'),
    password: Yup.string().min(8, 'La contraseña tiene que tener como mínimo 8 caracteres.').required('Por favor ingrese una constraseña válida.')
})

