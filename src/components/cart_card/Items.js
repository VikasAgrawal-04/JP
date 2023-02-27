import React ,{useContext}from 'react'
import { CartContext } from './cart_card';


export const Items = ({slug,name,images,price,ingredients}) => {
  const {removeItem} = useContext(CartContext);
  return (
    <>
     <div className='items-info'>
              <div className='product-img'>
                <img src={images.url} alt=""/>
              </div>
              <div className='title'>
                <h2>{name}</h2>
                <p>{ingredients}</p>
              </div>

              <div className='add-minus-quantity'>
                <i className='fas fa-minus minus'></i>
                <input type="text" placeholder='2'/>
                <i className='fas fa-plus add'></i>
              </div>

              <div className='price'>
                <h3>{price}</h3>
              </div>

              <div className='remove-item'>
                <i className='fas fa-trash-alt remove' 
                onClick={()=>removeItem(slug)}></i>
              </div>
              </div>

              <hr/>



    </>
  )
}
