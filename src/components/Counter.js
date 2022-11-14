import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT } from '../store';
import { counterActions } from '../store';
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  function incrementHandler(){
    dispatch(counterActions.increment())
    
  }
  
  function increaseHandler() {
    dispatch(counterActions.increase(10)) 
  }
  
  function decrementHandler(){
    dispatch(counterActions.decrement())
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
