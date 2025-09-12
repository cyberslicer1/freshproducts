import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PRODUCTS } from '../../utils/constants';
import './Home.scss';

const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="home">
      <HeroBanner />
      
      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature">
              <h3>🌱 Fresh & Organic</h3>
              <p>Locally sourced, pesticide-free produce</p>
            </div>
            <div className="feature">
              <h3>🚚 Fast Delivery</h3>
              <p>Same-day delivery available</p>
            </div>
            <div className="feature">
              <h3>💰 Best Prices</h3>
              <p>Competitive prices for quality produce</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;