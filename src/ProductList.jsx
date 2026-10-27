import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import plantsData from './plantsData';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <main className="product-list-page">
      <h1>Shop Houseplants</h1>
      {plantsData.map((category) => (
        <section key={category.category} className="category-section">
          <h2>{category.category}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const isAdded = !!addedItems[plant.name];
              return (
                <div className="plant-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <h3 className="plant-name">{plant.name}</h3>
                  <p className="plant-description">{plant.description}</p>
                  <p className="plant-price">${plant.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-btn"
                    disabled={isAdded}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {isAdded ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
