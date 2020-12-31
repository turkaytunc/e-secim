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
          <div className="login-input-container">
            <label className="login-tc-label" htmlFor="tc-kimlik-no">
              TC Kimlik No
              <input
                type="text"
                name="tc-kimlik-no"
                id="tc-kimlik-no"
                value={userId}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserId(event.target.value)}
              />
            </label>
            <label className="login-password-label" htmlFor="sifre">
              Şifre
              <input
                type="password"
                name="sifre"
                id="sifre"
                value={userPassword}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserPassword(event.target.value)}
              />
            </label>
          </div>
          <button className="login-submit-button" type="submit">
            Giriş
          </button>
        </form>
      )}
    </>
  );
};

export default Login;
