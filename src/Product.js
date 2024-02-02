import React, { useState } from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating,initialPrice}) {
  const [{ basket } ,dispatch]=useStateValue();
  const [counter, setCounter] = useState(0);


const addToBasket = () => {
  setCounter(counter + 1);

  if (counter === 1) {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        initialPrice:initialPrice,
      },
    });
  }
};

 

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{initialPrice}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map(() => <p>*</p>)
          }
        </div>
      </div>
      <div>
        <img  src={image} />
        <button onClick={addToBasket} >Add to Basket</button>
      </div>
      
      
    </div>
  )
}

export default Product