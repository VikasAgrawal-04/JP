import React from 'react'

export const Items = ({_id,name,images,price,ingredients}) => {
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
                <i className='fas fa-trash-alt remove' onClick={()=>removeItem(_id)}></i>
              </div>
              </div>

              <hr/>



    </>
  )
}
