// ? Creating store with Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice.js';
import { authSlice } from './authSlice.js';

// * Dispatching actions
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})