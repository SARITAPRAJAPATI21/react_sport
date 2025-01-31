import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register/Register";
import Donation from "./components/Donation/Donation";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DropGroup from "./components/Faq/DropGroup";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/donation" element={<Donation />}></Route>
        <Route path="/faq" element={<DropGroup />}></Route>
      </Routes>

    </>
  );
}

export default App;
