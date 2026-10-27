import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from './CartSlice';

function Header() {
  const totalItems = useSelector(selectTotalQuantity);

  return (
    <header className="app-header">
      <NavLink to="/" className="brand">
        <span className="brand-leaf" aria-hidden="true">🌿</span>
        Paradise Nursery
      </NavLink>

      <nav className="main-nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
          <span className="cart-link">
            Cart
            <span className="cart-icon" aria-label="items in cart">
              🛒
              <span className="cart-count">{totalItems}</span>
            </span>
          </span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
