import React, { useContext, useState } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

import './LoginScreen.css';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const [error, setError] = useState(false);

  const [{ nameInput }, handleInputChange] = useForm({
    nameInput: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (nameInput === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      return;
    }

    setError(false);

    const lastPath = localStorage.getItem('lastPath') || '/';
    // console.log(lastPath);
    dispatch({
      type: types.login,
      payload: {
        name: nameInput,
      },
    });
    // Reemplazar en la historia que no regrese el login sino se redireccione directamente al "/"
    history.replace(lastPath);
    // history.replace('/');
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="" className="form-label">
            Usuario:
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Ingresa tu nombre"
            autoComplete="off"
            name="nameInput"
            value={nameInput}
            onChange={handleInputChange}
          />

          <label htmlFor="" className="form-label">
            Contraseña:
          </label>
          <input type="password" autoComplete="off" disabled />
          <button type="submit" className="btn-hero">
            Login
          </button>
        </form>
        {error && <p className="error">*Debe ingresar un nombre</p>}
        <p className="mensaje">
          NOTA: Ingresa solo tu nombre y dale click en "Login"
        </p>
      </div>
    </div>
  );
};
