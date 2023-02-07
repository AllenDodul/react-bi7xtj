import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./style.css";
import Nav from './Components/Nav.jsx';
import Products from './Components/Products.jsx';
import Cart from './Components/Cart.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Products />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
