// ? useReducer hook
// Used for managing complex state logic in a more predictable way, especially when state updates depend on previous state or when multiple state variables are involved.

// 1. Define a reducer function that takes the current state and an action, and returns the new state:

function counterReducer(state, action) {
  if (action.type === 'increment') return { count: state.count + 1 };
  if (action.type === 'decrement') return { count: state.count - 1 };
  if (action.type === 'reset') return { count: 0 };
  throw new Error('Unknown action');
}

// 2. Use it in a component
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}

// Passing Data with Actions — the payload
function todosReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case 'toggle':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );
    case 'delete':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <>
      <button onClick={() => dispatch({ type: 'add', payload: 'Buy milk' })}>Add Todo</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => dispatch({ type: 'toggle', payload: todo.id })}>✓</button>
          <button onClick={() => dispatch({ type: 'delete', payload: todo.id })}>✕</button>
        </div>
      ))}
    </>
  );
}
