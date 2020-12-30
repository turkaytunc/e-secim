import React, { useState } from 'react';
import './login.scss';
import sha256 from 'crypto-js/sha256';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isUserValid, setIsUserValid] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hashedUserInfo = sha256(userId + userPassword).toString();

    fetch('https://secim.webde.biz.tr/api/secim/isuservalid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({ hashedUserInfo: hashedUserInfo }),
    })
      .then((res) => (res.status === 200 ? setIsUserValid(true) : setIsUserValid(false)))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isUserValid ? (
        'user is valid'
      ) : (
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}
          className="login-form-container"
        >
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
      )}
    </>
  );
};

export default Login;
