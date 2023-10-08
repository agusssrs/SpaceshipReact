import { addItemToCart, removeItemFromCart } from "./cartUtils";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            }

        },

        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        },

        clearCart: (state) => {
            return {
                ...state,
                cartItems: []
            }
        },

        toggleHiddenCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
    }
})

export const {
    addToCart,
    clearCart,
    removeFromCart,
    toggleHiddenCart
} = cartSlice.actions;

export default cartSlice.reducer;