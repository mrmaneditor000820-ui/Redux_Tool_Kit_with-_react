
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "./counterSlice"

function App() {

const count = useSelector(
  (state)=> state.counter.count
)

const dispatch = useDispatch()


  return (
    <>
    <h1>{count}</h1>


    <button onClick={()=> dispatch(increment())}>increment</button>
    <button onClick={()=> dispatch(decrement())}>decrement</button>
    <button onClick={()=> dispatch(reset())}>reset</button>
    </>
  )
}

export default App