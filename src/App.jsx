import { Routes, Route, Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import Header from './Header';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <h1 className="company-name">Paradise Nursery</h1>
        <AboutUs />
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/products"
        element={
          <>
            <Header />
            <ProductList />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Header />
            <CartItem />
          </>
        }
      />
    </Routes>
  );
}

export default App;
