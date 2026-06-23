import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./userSlice";
import "./User.css";

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