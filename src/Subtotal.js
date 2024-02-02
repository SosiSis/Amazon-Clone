import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import {  useNavigate } from 'react-router-dom';

function Subtotal() {
    const [{ basket } , dispatch]=useStateValue();
    console.log(basket);
    const getBasketTotal = (baskete) => baskete?.reduce((amount, item) => item.price + amount, 0);
    const navigate= useNavigate();
  return (
    

    <div className='subtotal'>
        <>
  renderText={(value) => (
    <div>
      <p>
        Subtotal {basket.length} items: <strong>{value}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />This order contains a gift
      </small>
    </div>
  )}
  decimalScale={2}
  value={getBasketTotal(basket)}
  displayType="text"
  thousandSeparator={true}
  prefix={"$"}
  </>
        <button onClick={navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
