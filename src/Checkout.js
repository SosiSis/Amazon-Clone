import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket},dispatch]= useStateValue();
  return (
    <>
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad'
                src='https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Otqt4bVxL._SR1236,1080_.jpg'
            />
            <h3>Hello</h3>
            {/* {user?.email} */}
            <h2 className='checkout__title'>Your Shopping Basket</h2>
            {basket.map((item) => (
  <CheckoutProduct
    id={item.id}
    title={item.title}
    image={item.image}
    price={item.price}
    rating={item.rating}
    initialPrice={item.initialPrice}
  />
))}
        </div>
         <div className='checkout__right'>
            <Subtotal />
         </div>
    </div>
    
      
   
    </>

    
  )
}

export default Checkout