import React from 'react';
import {createContext, useState} from 'react';

export const CartContext = createContext();

const productArray = [
  {
    id:1, 
    name: 'Burger', 
    price: 20,
  },
  {
    id:2 , 
    name: 'Chess Burger', 
    price: 25,
  },
  {
    id:3, 
    name: 'Franch Fry', 
    price: 15,
  },
  {
    id: 4, 
    name: 'Drink', 
    price: 5,
  }
];

const CartProvider = ({children}) =>{
  const [items, setItems] = useState([]);

  const addToCard = (name, price) =>{
    setItems((prevItems)=> [...prevItems, {name, price}])
  }

  return(
    <CartContext.Provider value={{items, addToCard,productArray}}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider;