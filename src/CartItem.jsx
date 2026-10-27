import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, updateQuantity, removeItem } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Calculates the total amount for all products in the cart
  const calculateTotalAmount = () =>
    cartItems.reduce((total, item) => total + item.cost * item.quantity, 0);

  const calculateTotalQuantity = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculates the subtotal for a single item based on quantity and cost
  const calculateTotalCost = (item) => item.cost * item.quantity;

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  const handleCheckoutShopping = () => {
    alert('Coming Soon');
  };

  return (
    <main className="cart-page">
      <h1>Your Shopping Cart</h1>

      <div className="cart-summary">
        <p>
          Total Plants: <strong>{calculateTotalQuantity()}</strong>
        </p>
        <p>
          Total Cost: <strong>${calculateTotalAmount().toFixed(2)}</strong>
        </p>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Go find your next favorite plant!</p>
      ) : (
        <div className="cart-container">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} className="cart-item-thumbnail" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-cost">Unit price: ${item.cost.toFixed(2)}</p>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    +
                  </button>
                </div>
                <p className="cart-item-total">
                  Subtotal: ${calculateTotalCost(item).toFixed(2)}
                </p>
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <button className="continue-shopping-btn" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-btn" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </main>
  );
}

export default CartItem;
