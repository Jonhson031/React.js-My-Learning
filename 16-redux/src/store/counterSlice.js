import { createSlice } from '@reduxjs/toolkit'
const initialCounterState = { counter: 0, showCounter: true };

// * Creating counter slice
export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
        resetCounter(state) {
            state.counter = 0
        }
    }
});
