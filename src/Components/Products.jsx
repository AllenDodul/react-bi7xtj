import React,{useContext} from 'react';
import {CartContext} from '../CartContext';
import Product from './Product.jsx';

const Products = () =>{
  const {productArray} = useContext(CartContext);

  return(
    <div>
      <h1>Products Page</h1>
      {productArray.map((product)=> <Product key={product.name} {...product}/>)}
    </div>
  ) 
}

export default Products;