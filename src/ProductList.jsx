import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, selectTotalQuantity } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

import snakePlant from './assets/plants/snake-plant.svg';
import spiderPlant from './assets/plants/spider-plant.svg';
import peaceLily from './assets/plants/peace-lily.svg';
import bostonFern from './assets/plants/boston-fern.svg';
import rubberPlant from './assets/plants/rubber-plant.svg';
import dracaena from './assets/plants/dracaena.svg';
import aloeVera from './assets/plants/aloe-vera.svg';
import echeveria from './assets/plants/echeveria.svg';
import jadePlant from './assets/plants/jade-plant.svg';
import barrelCactus from './assets/plants/barrel-cactus.svg';
import haworthia from './assets/plants/haworthia.svg';
import sedum from './assets/plants/sedum.svg';
import pothos from './assets/plants/pothos.svg';
import zzPlant from './assets/plants/zz-plant.svg';
import philodendron from './assets/plants/philodendron.svg';
import castIronPlant from './assets/plants/cast-iron-plant.svg';
import dumbCane from './assets/plants/dumb-cane.svg';
import chineseEvergreen from './assets/plants/chinese-evergreen.svg';

export const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: snakePlant, cost: 24.99, description: 'Hardy, upright leaves that filter indoor air with almost no care.' },
      { name: 'Spider Plant', image: spiderPlant, cost: 18.5, description: 'Fast-growing arching leaves, great for hanging baskets.' },
      { name: 'Peace Lily', image: peaceLily, cost: 29.99, description: 'Elegant white blooms and glossy leaves that thrive in low light.' },
      { name: 'Boston Fern', image: bostonFern, cost: 21.0, description: 'Lush, feathery fronds that love humidity.' },
      { name: 'Rubber Plant', image: rubberPlant, cost: 26.75, description: 'Bold, glossy leaves on a sturdy upright stem.' },
      { name: 'Dracaena', image: dracaena, cost: 23.5, description: 'Striking spiky leaves that purify the air year-round.' },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { name: 'Aloe Vera', image: aloeVera, cost: 15.0, description: 'Soothing gel-filled leaves and a classic, low-maintenance look.' },
      { name: 'Echeveria', image: echeveria, cost: 12.75, description: 'Rosette-shaped succulent with soft blue-green color.' },
      { name: 'Jade Plant', image: jadePlant, cost: 20.25, description: 'Thick glossy leaves said to bring good fortune to any room.' },
      { name: 'Barrel Cactus', image: barrelCactus, cost: 17.99, description: 'Round, ribbed cactus with a cheerful pink bloom.' },
      { name: 'Haworthia', image: haworthia, cost: 13.5, description: 'Compact rosettes with translucent striped leaves.' },
      { name: 'Sedum', image: sedum, cost: 11.25, description: 'Clustered, plump leaves that are nearly indestructible.' },
    ],
  },
  {
    category: 'Low Light Plants',
    plants: [
      { name: 'Pothos', image: pothos, cost: 16.99, description: 'Trailing vines with heart-shaped leaves, nearly impossible to kill.' },
      { name: 'ZZ Plant', image: zzPlant, cost: 27.5, description: 'Glossy, waxy leaves that tolerate neglect and low light.' },
      { name: 'Philodendron', image: philodendron, cost: 22.0, description: 'Lush, trailing foliage that adapts to almost any corner.' },
      { name: 'Cast Iron Plant', image: castIronPlant, cost: 25.0, description: 'Nearly indestructible deep-green leaves for dark corners.' },
      { name: 'Dumb Cane', image: dumbCane, cost: 19.5, description: 'Broad variegated leaves that brighten shaded rooms.' },
      { name: 'Chinese Evergreen', image: chineseEvergreen, cost: 24.25, description: 'Patterned foliage that thrives on neglect.' },
    ],
  },
];

export function Navbar({ onHomeClick, onPlantsClick, onCartClick }) {
  const totalQuantity = useSelector(selectTotalQuantity);

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    onPlantsClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    onCartClick();
  };

  return (
    <nav className="navbar">
      <a href="/" onClick={handleHomeClick} className="nav-brand">
        <span className="brand-leaf" aria-hidden="true">🌿</span>
        Paradise Nursery
      </a>
      <div className="nav-links">
        <a href="/" onClick={handleHomeClick}>Home</a>
        <a href="/" onClick={handlePlantsClick}>Plants</a>
        <a href="/" onClick={handleCartClick} className="cart-link">
          Cart
          <span className="cart-icon" aria-label="items in cart">
            🛒
            <span className="cart_quantity_count">{totalQuantity}</span>
          </span>
        </a>
      </div>
    </nav>
  );
}

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const handlePlantsClick = () => setShowCart(false);
  const handleCartClick = () => setShowCart(true);
  const handleContinueShopping = () => setShowCart(false);

  return (
    <div className="product-list-page">
      <Navbar onHomeClick={onHomeClick} onPlantsClick={handlePlantsClick} onCartClick={handleCartClick} />

      {!showCart ? (
        <main className="product-grid-wrapper">
          <h1>Shop Houseplants</h1>
          {plantsArray.map((categoryObj) => (
            <div className="product-list" key={categoryObj.category}>
              <h2>{categoryObj.category}</h2>
              <div className="plant-grid">
                {categoryObj.plants.map((plant) => (
                  <div className="plant-card" key={plant.name}>
                    <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-cost">${plant.cost.toFixed(2)}</p>
                    <button
                      className="add-to-cart-btn"
                      disabled={!!addedToCart[plant.name]}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
