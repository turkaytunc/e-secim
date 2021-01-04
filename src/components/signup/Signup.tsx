import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './signup.scss';

const Signup = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const history = useHistory();

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
    })
      .then(() => {
        setIsSignedUp(true);
        setUserId('');
        setUserPassword('');
      })
      .catch((err) => {
        setIsSignedUp(false);
        console.error(err);
      });
  };

  useEffect(() => {
    if (isSignedUp) {
      history.push('/e-secim/login');
    }
  });

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
          />
        </label>
      </div>
      <button className="signup-submit-button" type="submit">
        Üye Ol
      </button>
    </form>
  );
};

export default Signup;
