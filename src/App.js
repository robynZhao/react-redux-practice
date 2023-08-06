import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { increment, decrement, checkLog } from './actions';

function App() {
    // access the reducer
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged)

    // get ability to dispatch an action
    const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Counter#: {counter} </h1>
        <button onClick={() => dispatch(increment(1))}> + 1 </button>
        {" "}
        <button onClick={() => dispatch(increment(100))}>  + 100</button>
        {" "}
        <button onClick={() => dispatch(decrement(1))}> - 1 </button>
        {" "}
        <button onClick={() => dispatch(decrement(100))}> - 100 </button>

        {isLogged ? <h3>Yes! Logged! </h3> : <h3>No! Didn't Log! </h3>}
        <button onClick={() => dispatch(checkLog())}>Click here to update sign-in or sign-out!</button>
        {" "}
    </div>
  );
}

export default App;
