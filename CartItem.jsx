import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem,
  updateQuantity,
} from '../CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleRemove = (id) => dispatch(removeItem(id));

  const handleCheckout = () => {
    alert('Coming Soon! 🚀 Checkout feature will be available shortly.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-content">
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
        </div>
        <div className="cart-empty">
          <p>Your cart is empty 🌱</p>
          <button className="continue-shopping-btn" onClick={onContinueShopping}>
            Browse Plants
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="cart-header">
        <h2>🛒 Your Cart</h2>
      </div>

      <div className="cart-content">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item-card">
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-img"
            />
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-unit-price">
                ${item.price.toFixed(2)} / unit
              </p>
              <p className="cart-item-subtotal">
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>
              <div className="quantity-controls">
                <button
                  className="qty-btn"
                  onClick={() => handleDecrease(item)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleIncrease(item)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleRemove(item.id)}
              aria-label="Remove item"
            >
              🗑 Remove
            </button>
          </div>
        ))}

        <div className="cart-summary">
          <div className="cart-total-row">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="cart-actions">
            <button
              className="continue-shopping-btn"
              onClick={onContinueShopping}
            >
              ← Continue Shopping
            </button>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
