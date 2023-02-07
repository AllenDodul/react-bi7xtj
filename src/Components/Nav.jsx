import React from 'react';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {CartContext} from '../CartContext.js';

const Nav = () =>{
  const {items} = useContext(CartContext);
  
  return(
    <nav>
      <Link to='/'>
        <h1>Store</h1>
      </Link>
      <Link to='/cart'>
        <p>Cart <span>0</span></p>
      </Link>
    </nav>
  ) 
}

export default Nav;