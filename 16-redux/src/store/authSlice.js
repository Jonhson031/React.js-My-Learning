import { createSlice } from '@reduxjs/toolkit'
const initialAuthState = { isAunthenticated: false, showLoginPage: true };
export const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        loginPage(state) {
            state.showLoginPage = true
        },
        login(state) {
            state.isAunthenticated = true
        },
        logout(state) {
            state.isAunthenticated = false
        }
    }
})