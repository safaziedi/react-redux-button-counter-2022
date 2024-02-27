import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from '../store/actions/actions.js'

export default function Button() {
  //useSelector = determine whether the component needs to be re-rendered.
    const count = useSelector(state => state.CountReducer);

    const dispatch = useDispatch()

  return (
    <div>
      <h1>I want {count} scoops of ice cream!</h1>
      <button onClick={() => dispatch(increment(1))}>More!</button>
      <button onClick={() => dispatch(decrement(1))}>Less!</button>

      <button onClick={() => dispatch(increment(2))}>For both of us!</button>

    </div>
  );
}
