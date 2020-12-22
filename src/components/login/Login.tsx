import React from 'react';

const Login = () => {
  const handleSubmit = () => {};
  return (
    <div className="login-page-container">
      <form onSubmit={() => handleSubmit()}>
        <label className="login-label">
          TC Kimlik No <input type="text" name="tc-kimlik-no" id="tc-kimlik-no" />
        </label>
        <label className="login-label">
          Şifre <input type="password" name="sifre" id="sifre" />
        </label>
      </form>
    </div>
  );
};

export default Login;
