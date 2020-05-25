import React from 'react';
import { Link } from 'gatsby';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item is-size-5" to="/" role="button">
              Rachel Davis
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="button"
              tabIndex={0}
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item is-size-5" to="/about">
                About
              </Link>
              <Link className="navbar-item is-size-5" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item is-size-5" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                href="http://charmsbyrachelalivia.storenvy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-item is-size-5 has-background-warning">
                Shop
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
