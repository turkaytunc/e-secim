import React, { useState } from 'react';
import './login.scss';
import sha256 from 'crypto-js/sha256';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(userId, userPassword);
    fetch(`https://secim.webde.biz.tr/api/developerhelper/secmenekle`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        tcNo: userId,
        sifre: userPassword,
      }),
    }).then((res) => console.log(res));
    setUserId('');
    setUserPassword('');
  };
  return (
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)} className="login-form-container">
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
          <input
            type="text"
            name="tc-kimlik-no"
            id="tc-kimlik-no"
            value={userId}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserId(event.target.value)}
          />
          <input
            type="password"
            name="sifre"
            id="sifre"
            value={userPassword}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserPassword(event.target.value)}
          />
        </div>
      </div>
      <div className="submit-button-container">
        <button type="submit">Giriş</button>
      </div>
    </form>
  );
};

export default Login;
