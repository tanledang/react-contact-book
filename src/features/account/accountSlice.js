import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
    name: "account",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        toggleLoggedIn: state => {
            state.isLoggedIn = !state.isLoggedIn
        },
        logIn: state => {
            state.isLoggedIn = true
        },
        logOut: state => {
            state.isLoggedIn = false
        }
    }
})

export const { toggleLoggedIn, logIn, logOut } = accountSlice.actions;

export default accountSlice.reducer