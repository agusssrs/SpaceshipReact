import axios from 'axios';
import { fetchOrdersFail, fetchOrdersStart, fetchOrdersSuccess } from '../redux/orders/ordersSlice'
import { BASE_URL } from '../utils/constants'


// export const getOrders = async (dispatch, currentUser) => {
//     dispatch(fetchOrdersStart());
    
//     try {
//         const orders = await axios.get(`${BASE_URL}orders`, {
//             headers: {
//                 'x-token': currentUser.token
//             }
//         });
//         console.log(orders);
//         if (orders) {
//             dispatch(fetchOrdersSuccess(orders.data.data))            
//         }
//     } catch (error) {
//         console.log(error);
//         dispatch(fetchOrdersFail(
//             'Ha ocurrido un error. El usuario no es valido.'
//         ))
//     }
// }

export const getOrders = async (dispatch, currentUser) => {
    dispatch(fetchOrdersStart());

    try {
        const orders = await axios.get(`${BASE_URL}orders`, {
            headers: {
                "x-token": currentUser.token,
            },
        });
        console.log(orders);

        if (orders) {
            dispatch(fetchOrdersSuccess(orders.data.data))
        }
    } catch (error) {
        console.log(error);
        dispatch(fetchOrdersFail("ocurrio un error."));
    }
}