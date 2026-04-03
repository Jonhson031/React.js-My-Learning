import { configureStore } from '@reduxjs/toolkit'

import { uiSlice } from './uiSlice.js';
import cartReducer from './cartSlice.js';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartReducer,
    }
})

