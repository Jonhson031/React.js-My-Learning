import { createSlice } from '@reduxjs/toolkit'

const initialState = { isCartOpen: false }

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        cartOpen(state) {
            state.isCartOpen = !state.isCartOpen
        },
    }
})

export const uiActions = uiSlice.actions;