import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';

// Comentarios:
// Utilizamos el component con "C" MAYUSCULA, porque seria como un elemento html normal en el route
// Luego coloco el spread operator (...rest): como el path, exact, etc lo recuperamos.

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  console.log(rest); // { computedMatch: {"path": "/","url": "/","isExact": false,"params": {},}, location { hash: "", pathname: "/dc", search: "", state: undefined}, path: "/"}

  //   console.log(rest.location.pathname);
  //   console.log(rest.location.search);
  //   localStorage.setItem('lastPath', rest.location.pathname);

  localStorage.setItem(
    'lastPath',
    `${rest.location.pathname}${rest.location.search && rest.location.search}`
  );

  return (
    // Coloco todas las propiedas del path, exact
    // Luego el props como component retorna el history, location y match
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
