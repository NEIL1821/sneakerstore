import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Navbar min doesn't contain the logo.
const NavbarMin = () => {
  const { auth } = useAuth();
  return (
    <nav className="nav">
      {/* {console.log('AUTH: ', auth)} */}
      <NavLink className="nav__link" activeClassName="nav__link nav__link--active" to="/">
        Search
      </NavLink>
      <NavLink className="nav__link" activeClassName="nav__link nav__link--active" to="/mysneakers">
        My Sneakers
      </NavLink>
      <NavLink className="nav__link" activeClassName="nav__link nav__link--active" to="/profile">
        Profile
      </NavLink>
      <NavLink className="nav__link" activeClassName="nav__link nav__link--active" to="/sell">
        Sell
      </NavLink>
    </nav>
  );
};

export default NavbarMin;
