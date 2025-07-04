import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import { Deals } from "./Pages/Deals";
import Cart from "./Pages/Cart";
import ProductPreview from "./Pages/ProductPreview.jsx";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import Wishlist from "./Pages/Wishlist.jsx";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CategoryPage from "./Pages/CategoryPage";
import ScrollTop from "./Components/ScrollTop.jsx";

function App() {
  const [count, setCount] = useState(0); // Currently unused, remove if unnecessary

  return (
    <div className="bg-white min-h-screen relative">
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPreview />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
