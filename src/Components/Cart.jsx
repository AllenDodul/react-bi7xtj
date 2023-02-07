import React, {useContext} from 'react';
import {CartContext} from '../CartContext.js';

const Cart = () =>{
  const {items} = useContext(CartContext);

  return(
    <div>
      {items.map((item)=><>
        <div>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </div>
      </>)}
    </div>
  ) 
}

export default Cart;