import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCartItems,
  selectTotalQuantity,
  selectTotalCost,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from './CartSlice';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalCost = useSelector(selectTotalCost);
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const handleIncrement = (name) => dispatch(incrementQuantity(name));
  const handleDecrement = (name) => dispatch(decrementQuantity(name));
  const handleDelete = (name) => dispatch(removeItem(name));
  const handleCheckout = () => setCheckoutMessage('Coming Soon');

  return (
    <main className="cart-page">
      <h1>Your Shopping Cart</h1>

      <div className="cart-summary">
        <p>
          Total Plants: <strong>{totalQuantity}</strong>
        </p>
        <p>
          Total Cost: <strong>${totalCost.toFixed(2)}</strong>
        </p>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Go find your next favorite plant!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} className="cart-item-thumbnail" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-unit-price">Unit price: ${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item.name)} aria-label={`Decrease ${item.name} quantity`}>
                    -
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button onClick={() => handleIncrement(item.name)} aria-label={`Increase ${item.name} quantity`}>
                    +
                  </button>
                </div>
                <p className="cart-item-subtotal">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button className="delete-btn" onClick={() => handleDelete(item.name)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <Link to="/products" className="continue-shopping-btn">
          Continue Shopping
        </Link>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
      {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
    </main>
  );
}

export default CartItem;
