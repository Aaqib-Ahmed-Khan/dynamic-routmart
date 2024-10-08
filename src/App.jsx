import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";  // Ensure this is correct

import Header from "./components/Header";
import "./index.css";  // Your existing CSS files
// import '../src'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;


