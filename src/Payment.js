import React, { useEffect, useRef } from 'react';
import './Payment.css';

function Payment() {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Cool',
                amount: {
                  currency_code: 'CAD',
                  value: '600.00'
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log('Successful order', order);
        },
        onError: (err) => {
          console.log(err);
        }
      })
      .render(paypal.current);
  }, []);

  return <div ref={paypal}>Payment</div>;
}

export default Payment;