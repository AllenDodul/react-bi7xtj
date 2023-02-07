import React,{useContext} from 'react';
import {CartContext} from '../CartContext.js';

const Product = ({name, price}) =>{
  const {addToCard} = useContext(CartContext);
  
  return(
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <button type='submit' onClick={()=>addToCard(name, price)}>
        Add to Card
      </button>
    </div>
  )
}
export default Product;