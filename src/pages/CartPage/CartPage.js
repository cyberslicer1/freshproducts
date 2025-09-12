import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartPage.scss';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1>Your Cart</h1>
          <p>Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Your Cart</h1>
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item__details">
                <h3>{item.name}</h3>
                <p>${item.price} / {item.unit}</p>
              </div>
              <div className="cart-item__quantity">
                <button onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
              <div className="cart-item__total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button 
                className="cart-item__remove"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2>Total: ${getCartTotal().toFixed(2)}</h2>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;