import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./style.css";
import Nav from './Components/Nav.jsx';
import Products from './Components/Products.jsx';
import Cart from './Components/Cart.jsx';
import CartProvider from './CartContext.js'

export default function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Products />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
