import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "./counterSlice"
import "./App.css"

function App() {

const count = useSelector( (state)=> state.counter.count
)

const dispatch = useDispatch()


  return (
    <>
    <h1 className="counter-display">{count}</h1>


    <button className="btn btn-increment" onClick={()=> dispatch(increment())}>increment</button>
    <button className="btn btn-decrement" onClick={()=> dispatch(decrement())}>decrement</button>
    <button className="btn btn-reset" onClick={()=> dispatch(reset())}>reset</button>
    </>
  )
}

export default App