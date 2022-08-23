
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import About from './components/About';
 import Checkout from './components/Checkout';
 import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  return (
    <>
      
    <Navbar/>

    <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/products" element={<Products/>}/>
         <Route exact path="/products/:id" element={<Product/>}/>
         <Route exact path="/Cart" element={<Cart/>}/>
         <Route exact path="/about" element={<About/>}/>
         <Route exact path="/Checkout" element={<Checkout/>}/>
         <Route exact path="/contact" element={<Contact/>}/>
         <Route exact path="/login" element={<Login/>}/>
         

    </Routes>
    </>
  );
}

export default App;
