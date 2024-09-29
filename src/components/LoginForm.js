import React, { useState } from 'react';
import '../styles/LoginForm.css';
import { useTranslation } from 'react-i18next'; 

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { t } = useTranslation(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: username, password: password }),
      });

      if (response.ok) {
        onLogin(); 
      } else if (response.status === 401) {
        setError(t('authError')); 
      } else {
        console.error('Error al realizar la solicitud:', response.status);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="text-center"><strong>{t('loginTitle')}</strong></h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="mb-3">
          <label htmlFor="username" className="form-label"><strong>{t('usernameLabel')}</strong></label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label"><strong>{t('passwordLabel')}</strong></label>
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
          <button type="submit" className="btn btn-primary"><strong>{t('loginButton')}</strong></button>
          <button type="button" className="btn btn-danger ms-2"><strong>{t('cancelButton')}</strong></button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
