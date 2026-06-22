// import React from "react"
// import { useSelector, useDispatch } from "react-redux"
// import { increment, decrement, reset } from "./counterSlice"
// import "./App.css"

// function App() {

// const count = useSelector( (state)=> state.counter.count
// )

// const dispatch = useDispatch()


//   return (
//     <>
//     <h1 className="counter-display">{count}</h1>


//     <button className="btn btn-increment" onClick={()=> dispatch(increment())}>increment</button>
//     <button className="btn btn-decrement" onClick={()=> dispatch(decrement())}>decrement</button>
//     <button className="btn btn-reset" onClick={()=> dispatch(reset())}>reset</button>
//     </>
//   )
// }

// export default App



import React, { useContext } from 'react'
import { Themecontext } from './theme/Themeprovider'

import transparentBulb from './theme/bulb_transparent.png'
import glowingBulb from './theme/bulb_glowing.png'

function App() {
  const {theme,toogletheme} = useContext(Themecontext);
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",border:"5px solid blue",width:"50%",height:"50",borderRadius:"50px",margin:"100px auto"}}>

     <img style={{width:"500px"}}
      src={theme === "light" ? glowingBulb : transparentBulb}
      alt="Toggle theme"
      onClick={toogletheme}
      style={{ cursor: 'pointer' }}></img>
      </div>
    </>
  )
}

export default App;