import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null,
    hiddenMenu: true,
    hiddenMenuNavbar: true
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers:{
        setCurrentUser: (state, action) => {
            return{
                ...state,
                currentUser: action.payload
            }
        },

        toggleMenu: (state) => {
            return{
                ...state,
                hiddenMenu: !state.hiddenMenu
            }
        },

        toggleMenuNavbar: (state) =>{
            return{
                ...state,
                hiddenMenuNavbar: !state.hiddenMenuNavbar
            }
        } 
    }
})

export const {setCurrentUser, toggleMenu, toggleMenuNavbar} = userSlice.actions;

export default userSlice.reducer;