import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "./counterSlice"

function App() {

  const count = useSelector(
    (state) => state.counter.count
  )

  const dispatch = useDispatch()

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => dispatch(increment())}>INCREMENT</button>

      <button onClick={() => dispatch(decrement())} >  DECREMENT </button>

      <button onClick={() => dispatch(reset())}> RESET</button>
    </>
  )
}

export default App