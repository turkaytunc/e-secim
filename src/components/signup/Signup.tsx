import React, { useState } from 'react';
import './signup.scss';

const Signup = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(`https://secim.webde.biz.tr/api/developerhelper/secmenekle`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tcNo: userId,
        sifre: userPassword,
      }),
    });
    setUserId('');
    setUserPassword('');
  };
  return (
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)} className="signup-form-container">
      <div className="signup-page-container">
        <div className="signup-label-container">
          <label className="signup-label" htmlFor="tc-kimlik-no">
            TC Kimlik No
          </label>
          <label className="signup-label" htmlFor="sifre">
            Şifre
          </label>
        </div>
        <div className="signup-input-container">
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
        <button type="submit">Üye Ol</button>
      </div>
    </form>
  );
};

export default Signup;
