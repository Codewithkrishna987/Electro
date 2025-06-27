import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import { Deals } from './Pages/Deals'
import Categories from './Pages/Categories'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Register } from './Pages/Register'
import {Login} from './Pages/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white h-full relative">
      <Navbar />
      {/* <SearchBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Deals" element={<Deals />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
