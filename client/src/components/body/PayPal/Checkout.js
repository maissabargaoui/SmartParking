/*import React from 'react'
import CardIcon from "../assets/credit-card.svg";
import ProductImage from "../assets/product-image.jpg";
import PaypalCheckoutButton from "./PaypalCheckoutButton";



const Checkout = () => {

    const product = {
        description: "You Are About To Pay",
        price: 9
      };
  return (
    <div className="checkout">
      <h1>PayPal Checkout</h1>
      <p className="checkout-title">You Are About To Pay</p>
      <p className="checkout-description">
            For Your Parking Lot
      </p>
      <h1 className="checkout-price">$9</h1>
      <img
        className="checkout-product-image"
        src={ProductImage}
        alt="Product"
      />
      <button className="checkout-button">
        <div className="grey-circle">
          <div className="purple-circle">
            <img className="icon" src={CardIcon} alt="credit-card-icon" />
          </div>
        </div>
        <div className="text-container">
          <p className="text">Buy</p>
        </div>
      </button>
      <div className="separator"></div>
      <div className="paypal">
        <p className="checkout-title">OR, PAY WITH PAYPAL</p>
        <div className="paypal-button-container">
        <PaypalCheckoutButton product={product} />
      </div>
    </div>
    </div>
  );
};*/

//export default Checkout;

import React, { useState, useRef, useEffect } from 'react';
import chair from '../assets/credit-card.svg';
import gif from '../assets/product-image.jpg';

function Product({ product }) {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: 'USD',
                  value: product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        },
      })
      .render(paypalRef.current);
  }, [product.description, product.price]);

  if (paidFor) {
    return (
      <div>
        <h1>Congrats, you just bought {product.name}!</h1>
        <img alt={product.description} src={gif} />
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <h1>
        {product.description} for ${product.price}
      </h1>
      <img alt={product.description} src={product.image} width="200" />
      <div ref={paypalRef} />
    </div>
  );
}

function Checkout() {
  const product = {
    price: 2,
    name: 'Quick Reservation',
    description: 'Get Your Parking Lot For',
    image: chair,
  };

  return (
    <div className="App">
      <Product product={product} />
    </div>
  );
}

export default Checkout;
