import React, { useContext } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

import './globals.css';

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuthenticated={user.logged}
        />
        <PrivateRoute
          path="/"
          component={DashboardRoutes}
          isAuthenticated={user.logged}
        />
      </Switch>
      {/* SEGUNDA FORMA MAS EFICIENTE?*/}
      {/* <Switch> */}
      {/* {user.logged ? ( //Muestro (DashboardRoutes) si (logged) */}
      {/* <Route path="/" component={DashboardRoutes} /> */}
      {/* ) : ( */}
      {/* <> */}
      {/* //En caso contrario muestro (LoginScreen) */}
      {/* <Route exact path="/login" component={LoginScreen} /> */}
      {/* <Redirect to="/login" /> */}
      {/* </> */}
      {/* )} */}
      {/* </Switch> */}
    </Router>
  );
};
