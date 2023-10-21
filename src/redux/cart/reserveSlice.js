import { removeItemFromCart } from "./cartUtils";
import {addItemToReserve} from './reserveUtils'
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hidden: true,
    reserveItems:[]
}
const reserveSlice = createSlice({
    name: 'reserve',
    initialState: INITIAL_STATE,
    reducers: {        
        addToReserve: (state, action) => {
            return {
                ...state,
                reserveItems: addItemToReserve(state.reserveItems, action.payload),
            }
        },

        removeFromCart: (state, action) => {
            return {
                ...state,
                reserveItems: removeItemFromCart(state.cartItems, action.payload)
            }
        },

        clearCart: (state) => {
            return {
                ...state,
                reserveItems: []
            }
        },
        
    }
})

export const {
    clearCart,
    removeFromCart,    
    addToReserve
} = reserveSlice.actions;

export default reserveSlice.reducer;