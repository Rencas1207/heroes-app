import React, { useContext, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

import logo from '../../assets/heroes/logo-hero.png';

// import '../../routers/globals.css';
import './Navbar.css';

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const [showLinks, setshowLinks] = useState(false);
  const [showBars, setshowBars] = useState(false);

  // Aquí utilizamos el custom Hook de react-router-dom (useHistory)
  const history = useHistory();

  const handleBars = () => {
    setshowLinks(!showLinks);
    setshowBars(!showBars);
  };

  const handleLogout = () => {
    history.replace('/login');
    dispatch({
      type: types.logout,
    });
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-title">
          Heroes<span>App</span>
        </div>
      </Link>

      <div
        className="hamburger"
        id={showBars ? 'active' : ''}
        onClick={handleBars}
      >
        <span></span>
      </div>

      <div className="navbar-link" id={showLinks ? '' : 'hidden'}>
        <div className="navbar-link-item">
          <NavLink
            activeClassName="active"
            activeStyle={{ color: '#e07924' }}
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            activeStyle={{ color: '#e07924' }}
            exact
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            activeStyle={{ color: '#e07924' }}
            exact
            to="/search?"
          >
            Buscar héroe
          </NavLink>
        </div>

        <div className="navbar-logout" id={showLinks ? '' : 'hidden'}>
          <p>¡Hola {user.name}!</p>
          <button onClick={handleLogout}>Salir</button>
        </div>
      </div>
    </nav>
  );
};
