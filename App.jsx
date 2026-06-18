import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {
  // 'landing' | 'products' | 'cart'
  const [currentPage, setCurrentPage] = useState('landing');
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const goToProducts = () => setCurrentPage('products');
  const goToCart = () => setCurrentPage('cart');
  const goToLanding = () => setCurrentPage('landing');

  // Navbar used on product and cart pages
  const Navbar = () => (
    <nav className="navbar">
      <span className="navbar-brand" onClick={goToLanding} style={{ cursor: 'pointer' }}>
        🌿 Paradise Nursery
      </span>
      <div className="navbar-links">
        <a onClick={goToLanding} style={{ cursor: 'pointer' }}>Home</a>
        <a onClick={goToProducts} style={{ cursor: 'pointer' }}>Plants</a>
        <button className="cart-icon-wrapper" onClick={goToCart} aria-label="View cart">
          🛒
          {totalCount > 0 && (
            <span className="cart-count-badge">{totalCount}</span>
          )}
        </button>
      </div>
    </nav>
  );

  if (currentPage === 'landing') {
    return (
      <div className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p className="tagline">
            Bring nature indoors. Discover hand-picked houseplants that transform
            any space into your own green paradise.
          </p>
          <button className="get-started-btn" onClick={goToProducts}>
            Get Started
          </button>
        </div>
      </div>
    );
  }

  if (currentPage === 'cart') {
    return (
      <div className="cart-page">
        <Navbar />
        <CartItem onContinueShopping={goToProducts} />
      </div>
    );
  }

  return (
    <div className="products-page">
      <Navbar />
      <ProductList onNavigateToCart={goToCart} />
    </div>
  );
}

export default App;
