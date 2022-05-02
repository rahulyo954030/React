import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { CounterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)
  const show =useSelector((state) => state.counter.showCounter)

  const toggleCounterHandler = () => {
    dispatch(CounterActions.toggleCounter());
  };

   const incrementHandler=()=>{
    dispatch(CounterActions.increment());

   };
   const increaseHandler=()=>{
    dispatch(CounterActions.increase(5));

   };
   const decrementHandler=()=>{
    dispatch(CounterActions.decrement());

  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { show && <div className={classes.value}>{counter}</div>}
     <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
