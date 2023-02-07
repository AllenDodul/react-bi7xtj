import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{
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