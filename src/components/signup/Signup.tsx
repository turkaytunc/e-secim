import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userSignUp } from '../../util/userSignUp';
import './signup.scss';

const Signup = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [inputError, setInputError] = useState('');

  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userId.length !== 11) {
      setInputError('Lütfen geçerli bir tc kimlik numarası giriniz!');
      return;
    } else if (userPassword.length < 5) {
      setInputError('Şifre minimum 5 karakter içermelidir!');
      return;
    }
    userSignUp(userId, userPassword)
      .then(() => {
        history.push('/e-secim/login');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)} className="signup-form-container">
      <div className="signup-title-container">
        <p>Üye Ol</p>
      </div>
      <div className="signup-input-container">
        <label className="signup-tc-label" htmlFor="tc-kimlik-no">
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
        <label className="signup-password-label" htmlFor="sifre">
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
      <button className="signup-submit-button" type="submit">
        Üye Ol
      </button>
    </form>
  );
};

export default Signup;
