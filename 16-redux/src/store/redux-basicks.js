import { createStore } from 'redux';

// * Reducer function receives two parameters: old state + dispatched action. And returns New State Object
const initialState = { counter: 0, showCounter: true };

function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        }
    }

    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
        }
    }

    return state;
};


const store = createStore(counterReducer);

export default store;