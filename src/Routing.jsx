import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Counter from "./Counter";
import User from "./User";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;