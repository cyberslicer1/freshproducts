import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import './Navigation.scss';

const Navigation = () => {
  const location = useLocation();
  const { getCartItemsCount } = useCart();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navItems.map(item => (
          <li key={item.path} className="navigation__item">
            <Link 
              to={item.path} 
              className={`navigation__link ${location.pathname === item.path ? 'navigation__link--active' : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className="navigation__item">
          <Link to="/cart" className="navigation__cart">
            🛒 Cart ({getCartItemsCount()})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;