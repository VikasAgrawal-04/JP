import React from 'react'
import './cart.css'
import {useState} from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Items } from './Items';
import {MenuItems} from './menuData';
import {Provider} from "react-redux";
import {store} from "./store";


const CartCard = () => {



  const[item,setItem]=useState(MenuItems);

  return (
    <>
    <header>
    <div className='continue-shopping'>
      <KeyboardBackspaceIcon alt="arrow" className="arrow-icon"/>
      <h3>Continue Shopping</h3>
    </div>
    <div className="cart-icon">
    <ShoppingCartIcon style={{ fontSize: 58 }} alt="cart"/>
    <p>7</p>
    </div>
    </header>
    <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">7</span>{" "}
            items in shopping cart
          </p>
        <div>
          <div className="cart-items">
            <div className='cart-items-container'>
              <Scrollbars>

                {
                  item.map((curItem)=>{
                    return  <Items key={curItem._id}{...curItem}/>
                  })
                }
            
              </Scrollbars>

              
            </div>
          </div>
        </div>
        <div className='card-total'>
          <h3>Cart Total  : <span>2200 rs</span></h3>
          <button>checkout</button>
        </div>
        </section>
    </>
    
  )
}
export default CartCard