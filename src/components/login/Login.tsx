import React from 'react';
import './login.scss';

const Login = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={() => handleSubmit()} className="login-form-container">
      <div className="login-page-container">
        <div className="login-label-container">
          <label className="login-label" htmlFor="tc-kimlik-no">
            TC Kimlik No
          </label>
          <label className="login-label" htmlFor="sifre">
            Şifre
          </label>
        </div>
        <div className="login-input-container">
          <input type="text" name="tc-kimlik-no" id="tc-kimlik-no" />
          <input type="password" name="sifre" id="sifre" />
        </div>
      </div>
      <div className="submit-button-container">
        <button type="submit">Giriş</button>
      </div>
    </form>
  );
};

export default Login;
