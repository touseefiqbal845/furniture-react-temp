import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./src/Pages/Home";
import Checkout from "./src/Pages/Checkout";
import Cart from "./src/Pages/Cart";
import Products from "./src/Pages/Products";
import Product from "./src/Pages/Product";  
import ScrollToTop from "./src/components/ScrollToTop/ScrollToTop";



const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
      </Routes> 
    </Router>
  );
};

export default App; 
