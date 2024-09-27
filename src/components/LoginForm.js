import React, { useState } from 'react';
import '../styles/LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      onLogin();
    } else {
      setError('Error de autenticación. Revise sus credenciales');
    }
  };

  return (
    <div className="login-container">
      <h2 className="text-center"><strong>Inicio de sesión</strong></h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="mb-3">
          <label htmlFor="username" className="form-label"><strong>Nombre de usuario</strong></label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label"><strong>Contraseña</strong></label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger"><strong>{error}</strong></div>}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary"><strong>Ingresar</strong></button>
          <button type="button" className="btn btn-danger ms-2"><strong>Cancelar</strong></button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
