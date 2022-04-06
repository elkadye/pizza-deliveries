import "./App.css";
import React from "react";


import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard/dashboard";
import Checkout from "./Pages/checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
