import React, { useState } from 'react'
import  './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id ,image,title,price,rating,initialPrice}) {
    const [{basket}, dispatch] = useStateValue(); // Call the useStateValue hook as a function

const removefromBasket = (id) => {
  dispatch({
    type: "REMOVE_FROM_BASKET",
    id: id,
  });
};
const [counter, setCounter] = useState(0);

const increaseToBasket = (id, price, initialPrice) => {
  dispatch({
    type: 'INCREASE_PRICE',
    id: id,
    price: price,
    initialPrice: initialPrice,
  });
};

const decreasefromBasket = (id, price, initialPrice) => {
  dispatch({
    type: 'DECREASE_PRICE',
    id: id,
    price: price ,
    initialPrice: initialPrice,
  });
};
const [count,setCount]=useState(1);
 const increase = () => {
    setCount(count + 1);
  };
  
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    
    <div className='checkoutProduct'>
        <img
            className="checkoutProduct__image"
            src={image}
            />
        <div className= "checkoutProduct__info" >
            <p className="checkoutProduct__title">{title} </p>  
            <p assName="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map(() => (
                <p>*</p>
                ))}
            </div>
            <div className='checkoutProduct__count'>
            
                 <div  onClick={increase}><p onClick={() => increaseToBasket(id,price,initialPrice)}>+</p></div><p>Amount: {count}</p><div onClick={decrease}><p onClick={() => decreasefromBasket(id,price, initialPrice)}>-</p></div>
      
            </div>
            
            <button onClick={() => removefromBasket(id)}>Remove from Basket</button>
       </div>
    </div>
        
  )
}

export default CheckoutProduct