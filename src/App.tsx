import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Games from "./components/Games";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </>
  );
}

export default App;
