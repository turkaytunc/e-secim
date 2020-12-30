import React from 'react';
import './header.scss';
import vote from '../../static-files/vote.jpg';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <nav className="header-container">
      <div className="corp-container">
        <img src={vote} alt="corp-logo" />
        <div className="project-title">Elektronik Seçim Uygulamasına Hoş Geldiniz.</div>
      </div>
      <input className="nav-search-box" type="search" placeholder="Size nasıl yardımcı olabilirim?" />
      <div className="homepage-button-container">
        <Link to="/e-secim/">
          <button className="nav-button">Anasayfa</button>
        </Link>
      </div>
      <div className="signup-button-container">
        <Link to="/e-secim/signup">
          <button className="nav-button">Üye Ol</button>
        </Link>
      </div>
      <div className="login-button-container">
        <Link to="/e-secim/login">
          <button className="nav-button">Giriş Yap</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
