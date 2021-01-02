import React, { useContext, useEffect, useState } from 'react';
import './login.scss';
import sha256 from 'crypto-js/sha256';
import { Store } from '../../store/Store';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [validationStatus, setValidationStatus] = useState(0);
  const { state, dispatch } = useContext(Store);

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
      .then((res) => setValidationStatus(res.status))
      .catch((err) => console.log(err));

    dispatch({ type: 'ADD_TC', payload: userId });
    dispatch({ type: 'ADD_TC_HASH', payload: hashedUserInfo });

    setUserId('');
    setUserPassword('');
  };

  useEffect(() => {
    let time: NodeJS.Timeout;
    if (validationStatus === 401) {
      time = setTimeout(() => {
        setValidationStatus(0);
      }, 2000);
    }
    if (validationStatus === 200) {
      console.log(state.user);
    }
    return () => {
      clearTimeout(time);
    };
  }, [validationStatus, state]);

  return (
    <>
      {validationStatus === 200 ? (
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
          <div style={{ color: 'red' }}>{validationStatus === 401 ? 'User not exist' : null}</div>
          <button className="login-submit-button" type="submit">
            Giriş
          </button>
        </form>
      )}
    </>
  );
};

export default Login;
