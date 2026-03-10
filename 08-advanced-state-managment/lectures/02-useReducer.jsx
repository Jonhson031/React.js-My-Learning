// ? useReducer hook
// Used for managing complex state logic in a more predictable way, especially when state updates depend on previous state or when multiple state variables are involved.

// 1. Define a reducer function that takes the current state and an action, and returns the new state:
import React from 'react';

export function counterReducer(state, action) {
  if (action.type === 'INCREMENT') return { count: state.count + 1 };
  if (action.type === 'DECREMENT') return { count: state.count - 1 };
  if (action.type === 'RESET') return { count: 0 };

  return state;
}

function App() {
  const [counterState, counterDispatch] = React.useReducer(counterReducer, { count: 0 });

  function addCount() {
    counterDispatch({
      type: 'INCREMENT',
    });
  }

  function removeCount() {
    counterDispatch({
      type: 'DECREMENT',
    });
  }

  function resetCount() {
    counterDispatch({
      type: 'RESET',
    });
  }

  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={addCount}>Increment</button>
        <button onClick={removeCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default App;
