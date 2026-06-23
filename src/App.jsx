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






// import React, { useContext } from 'react'
// import { Themecontext } from './theme/Themeprovider'

// import transparentBulb from './theme/bulb_transparent.png'
// import glowingBulb from './theme/bulb_glowing.png'

// function App() {
//   const { theme, toogletheme } = useContext(Themecontext);
//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "center", border: "5px solid blue", width: "50%", height: "500px", borderRadius: "50px", margin: "100px auto" }}>

//         <img style={{ width: "50px" }}
//           src={theme === "light" ? glowingBulb : transparentBulb}
//           alt="Toggle theme"
//           onClick={toogletheme}
//           style={{ cursor: 'pointer' }}></img>
//       </div>
//     </>
//   )
// }

// export default App;



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./userSlice";
import "./App.css";

function App() {
  const user = useSelector((state) => state.user.user);
  console.log("user in app=>", user);

  const dispatch = useDispatch();

  const login = () => {
    dispatch(
      setUser({
        name: "ali",
        email: "ali@gmail.com",
        password: 123456,
      })
    );
  };

  const logout = () => {
    dispatch(setUser({}));
  };

  return (
    <div className="container">
      <h1 className="title">Redux Toolkit Login</h1>

      <div className="btn-box">
        <button className="login-btn" onClick={login}>
          Login
        </button>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {user && (
        <div className="card">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;