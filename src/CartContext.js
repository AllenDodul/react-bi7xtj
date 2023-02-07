import React from 'react';
import {createContext, useState} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) =>{
  return(
    <CartContext.Provider value={{items: 1}}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider;