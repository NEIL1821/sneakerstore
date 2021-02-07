import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logos/another-1.png';

const Navbar = () => {
  return (
    <nav className="nav nav--full">
      <img src={Logo} alt="Logo" className="logo" />
      <div>
        <NavLink className="nav__link" activeClassName="nav__link nav__link--active" exact to="/">
          Search
        </NavLink>
        <NavLink
          className="nav__link"
          activeClassName="nav__link nav__link--active"
          to="/mysneakers"
        >
          My Sneakers
        </NavLink>
        <NavLink className="nav__link" activeClassName="nav__link nav__link--active" to="/profile">
          Profile
        </NavLink>
        <NavLink className="nav__link" activeClassName="nav__link nav__link--active" to="/sell">
          Sell
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
