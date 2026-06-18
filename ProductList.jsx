import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../CartSlice';

const plantData = [
  // ===== Category 1: Succulents & Cacti =====
  {
    id: 1,
    category: '🌵 Succulents & Cacti',
    name: 'Echeveria',
    price: 9.99,
    image:
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    category: '🌵 Succulents & Cacti',
    name: 'Aloe Vera',
    price: 12.99,
    image:
      'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    category: '🌵 Succulents & Cacti',
    name: 'Jade Plant',
    price: 14.99,
    image:
      'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    category: '🌵 Succulents & Cacti',
    name: 'Barrel Cactus',
    price: 18.99,
    image:
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    category: '🌵 Succulents & Cacti',
    name: 'Haworthia',
    price: 10.99,
    image:
      'https://images.unsplash.com/photo-1569757533-2aee88afb71a?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    category: '🌵 Succulents & Cacti',
    name: 'Sedum Morganianum',
    price: 11.99,
    image:
      'https://images.unsplash.com/photo-1515522107893-40714068f81f?w=400&h=300&fit=crop',
  },

  // ===== Category 2: Tropical Plants =====
  {
    id: 7,
    category: '🌿 Tropical Plants',
    name: 'Monstera Deliciosa',
    price: 29.99,
    image:
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=300&fit=crop',
  },
  {
    id: 8,
    category: '🌿 Tropical Plants',
    name: 'Bird of Paradise',
    price: 39.99,
    image:
      'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=300&fit=crop',
  },
  {
    id: 9,
    category: '🌿 Tropical Plants',
    name: 'Philodendron Brasil',
    price: 19.99,
    image:
      'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=400&h=300&fit=crop',
  },
  {
    id: 10,
    category: '🌿 Tropical Plants',
    name: "Chinese Evergreen",
    price: 17.99,
    image:
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400&h=300&fit=crop',
  },
  {
    id: 11,
    category: '🌿 Tropical Plants',
    name: 'Pothos Golden',
    price: 8.99,
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
  },
  {
    id: 12,
    category: '🌿 Tropical Plants',
    name: 'Peace Lily',
    price: 22.99,
    image:
      'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&h=300&fit=crop',
  },

  // ===== Category 3: Flowering Plants =====
  {
    id: 13,
    category: '🌸 Flowering Plants',
    name: 'African Violet',
    price: 13.99,
    image:
      'https://images.unsplash.com/photo-1534531173927-aeb928d54385?w=400&h=300&fit=crop',
  },
  {
    id: 14,
    category: '🌸 Flowering Plants',
    name: 'Orchid White',
    price: 34.99,
    image:
      'https://images.unsplash.com/photo-1601662528567-526cd06f6582?w=400&h=300&fit=crop',
  },
  {
    id: 15,
    category: '🌸 Flowering Plants',
    name: 'Anthurium',
    price: 24.99,
    image:
      'https://images.unsplash.com/photo-1610396202589-86c7a58db6c2?w=400&h=300&fit=crop',
  },
  {
    id: 16,
    category: '🌸 Flowering Plants',
    name: 'Bromeliad Guzmania',
    price: 21.99,
    image:
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=300&fit=crop',
  },
  {
    id: 17,
    category: '🌸 Flowering Plants',
    name: 'Kalanchoe',
    price: 11.99,
    image:
      'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=300&fit=crop',
  },
  {
    id: 18,
    category: '🌸 Flowering Plants',
    name: 'Cyclamen',
    price: 16.99,
    image:
      'https://images.unsplash.com/photo-1589997689862-6b3b4c91aabe?w=400&h=300&fit=crop',
  },
];

// Group plants by category
const grouped = plantData.reduce((acc, plant) => {
  if (!acc[plant.category]) acc[plant.category] = [];
  acc[plant.category].push(plant);
  return acc;
}, {});

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedIds, setAddedIds] = useState({});

  const isInCart = (id) =>
    addedIds[id] || cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedIds((prev) => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div>
      <div className="products-header">
        <h2>Our Plant Collection</h2>
        <p>Handpicked plants to bring life to your home 🌱</p>
      </div>

      {Object.entries(grouped).map(([category, plants]) => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="plant-grid">
            {plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <div className="plant-card-body">
                  <div>
                    <p className="plant-name">{plant.name}</p>
                    <p className="plant-price">${plant.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
