import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/store-toolkit.js';

export default function Counter() {
  // * Dispatch Actions
  const dispatch = useDispatch();

  // * useSelector automatically sets subscription
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter)

  function incrementHandler() {
    dispatch(counterActions.increment())
  }

  function decrementHandler() {
    dispatch(counterActions.decrement())
  }

  function increaseHandler(amount) {
    dispatch(counterActions.increase(amount))
  }

  function toggleCounterHandler() {
    dispatch(counterActions.toggleCounter())
  }

  function resetHandler() {
    dispatch(counterActions.resetCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Incement</button>
        <button onClick={() => increaseHandler(5)}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={resetHandler}>Reset Counter</button>
    </main>
  );
};
