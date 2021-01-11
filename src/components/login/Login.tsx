import React, { useContext, useEffect, useState } from 'react';
import './login.scss';
import sha256 from 'crypto-js/sha256';
import { Store } from '../../store/Store';
import { validateUser } from '../../util/validateUser';
import Vote from '../vote/Vote';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [validationStatus, setValidationStatus] = useState(0);
  const { state, dispatch } = useContext(Store);
  const [inputError, setInputError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userId.length !== 11) {
      setInputError('Lütfen geçerli bir tc kimlik numarası giriniz!');
      return;
    } else if (userPassword.length < 5) {
      setInputError('Şifre minimum 5 karakter içermelidir!');
      return;
    }

    const hashedUserInfo = sha256(userId + userPassword).toString();
    validateUser(hashedUserInfo)
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
      }, 3000);
    }
    return () => {
      clearTimeout(time);
    };
  }, [validationStatus, state]);

  return (
    <>
      {validationStatus === 200 ? (
        <Vote />
      ) : (
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}
          className="login-form-container"
        >
          <div className="signup-title-container">
            <p>Giriş Yap</p>
          </div>
          <div className="login-input-container">
            <label className="login-tc-label" htmlFor="tc-kimlik-no">
              TC Kimlik No
              <input
                type="text"
                name="tc-kimlik-no"
                id="tc-kimlik-no"
                value={userId}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserId(event.target.value)}
                onFocus={() => setInputError('')}
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
                onFocus={() => setInputError('')}
              />
            </label>
          </div>
          {inputError ? <div style={{ color: 'red', paddingBottom: '1em' }}>{inputError}</div> : null}
          <div style={{ color: 'red' }}>{validationStatus === 401 ? 'Eksik veya hatalı giriş yaptınız!' : null}</div>
          <button className="login-submit-button" type="submit">
            Giriş Yap
          </button>
        </form>
      )}
    </>
  );
};

export default Login;
