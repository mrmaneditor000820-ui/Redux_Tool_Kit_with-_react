import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Counter from "./counter/Counter";
import User from "./user/User";
import Bulb from "./theme/Bulb";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user" element={<User />} />
        <Route path="/Bulb" element={< Bulb/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;