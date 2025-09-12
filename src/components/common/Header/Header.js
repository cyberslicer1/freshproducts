import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMobileMenu();
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <Link to="/" onClick={closeMobileMenu}>
                <h1>Fresh Produce</h1>
              </Link>
            </div>
            
            <Navigation />
            
            <div className="header__auth hide-mobile">
              {isAuthenticated ? (
                <div className="user-menu">
                  <span className="user-greeting">Hi, {user?.name}</span>
                  <button className="auth-button auth-button--logout" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <div className="auth-buttons">
                  <Link to="/login" className="auth-button auth-button--login">
                    Login
                  </Link>
                  <Link to="/signup" className="auth-button auth-button--signup">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
            
            <button 
              className="header__mobile-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <div className="container">
            <nav>
              <ul className="mobile-nav__list">
                <li>
                  <Link to="/" className="mobile-nav__link" onClick={closeMobileMenu}>
                    🏠 Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="mobile-nav__link" onClick={closeMobileMenu}>
                    🛒 Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="mobile-nav__link" onClick={closeMobileMenu}>
                    ℹ️ About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="mobile-nav__link" onClick={closeMobileMenu}>
                    📞 Contact
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="mobile-nav__link" onClick={closeMobileMenu}>
                    🛒 Cart
                  </Link>
                </li>
                
                <li className="mobile-nav__auth">
                  {isAuthenticated ? (
                    <div className="mobile-user-menu">
                      <span className="user-greeting">Hi, {user?.name}</span>
                      <button className="auth-button auth-button--logout" onClick={handleLogout}>
                        🚪 Logout
                      </button>
                    </div>
                  ) : (
                    <div className="mobile-auth-buttons">
                      <Link to="/login" className="auth-button auth-button--login" onClick={closeMobileMenu}>
                        🔐 Login
                      </Link>
                      <Link to="/signup" className="auth-button auth-button--signup" onClick={closeMobileMenu}>
                        📝 Sign Up
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
