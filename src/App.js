import React from "react";
import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact  path="/" element={<Home />}/>
          <Route  path="/services" element={<Services />}/>
          <Route  path="/products" element={<Products />}/>
          <Route  path="/sign-up" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
