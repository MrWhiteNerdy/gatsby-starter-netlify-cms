import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-end">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <p className="is-size-4">Rachel Krull</p>
          </Link>
        </div>
        <div className="navbar-start">
          <Link className="navbar-item" to="/about">
            <p className="is-size-4">About</p>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
