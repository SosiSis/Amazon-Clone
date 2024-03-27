import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import {  Link, useNavigate } from 'react-router-dom';
import CurrencyFormat from "react-currency-format"

function Subtotal() {
    const [{ basket } , dispatch]=useStateValue();
    console.log(basket);
    const getBasketTotal = (baskete) => baskete?.reduce((amount, item) => item.price + amount, 0);
    const navigate= useNavigate();
  return (
    

    <div className='subtotal'>
        <CurrencyFormat
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
  prefix={"$"}/>

       <Link to='/payment'> <button >Proceed to Checkout</button></Link>
    
    </div>
  )
}

export default Subtotal
