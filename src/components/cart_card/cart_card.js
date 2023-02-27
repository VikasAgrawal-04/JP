import React, { createContext, useReducer } from 'react'
import './cart.css'
import { MenuItems } from './menuData';
import { Provider } from "react-redux";
import { store } from "../../store";
import { Cart_Card2 } from './cart_Card2';
import { MenuItem } from '@material-ui/core';
import {reducer} from "../reducerCart";

export const CartContext = createContext();

const initialState={
  MenuItem:MenuItems,
  totalAmount:0,
  totalItems:0,
};
const CartCard = () => {

  //const[item,setItem]=useState(MenuItems);
  //now you can pass it globally using useContext
  const[state,dispatch]=useReducer(reducer,initialState)
  const removeItem=(slug)=>{
    return dispatch({
      type:"REMOVE_ITEM",
      payload:slug,
    })
  }
  return (
    <>
      <CartContext.Provider value={{...state,removeItem}}>

        <Cart_Card2 />


      </CartContext.Provider>

    </>

  )
}
export default CartCard