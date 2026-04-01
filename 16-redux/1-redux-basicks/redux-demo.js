const redux = require('redux');

// * Reducer function receives two parameters: old state + dispatched action. And returns New State Object
function counterReducer(state = { counter: 0 }, action) {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }

    return state;
};


const store = redux.createStore(counterReducer);


// * Subscription
function counterSubscriber() { // doest not receive any parameters
    const latestState = store.getState() // gives latest state snapshot after it was updated
    console.log(latestState);
}

store.subscribe(counterSubscriber);


// * Dispatch Action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });