import React from 'react';
import './header.scss';
import vote from '../../static-files/vote.jpg';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <nav className="header-container">
      <div className="corp-logo-container">
        <img
          style={{ borderRadius: '50%', height: '100px', width: '100px', boxShadow: '1px 1px 3px #333' }}
          src={vote}
          alt=""
        />
      </div>
      <div className="project-title">Elektronik Seçim Uygulamasına Hoş Geldiniz.</div>
      <ul className="nav-link-container">
        <li>
          <input className="nav-search-box" type="search" placeholder="Size nasıl yardımcı olabilirim?" />
        </li>
        <li>
          <Link to="/e-secim/">
            <button className="nav-button homepage-button">Anasayfa</button>
          </Link>
        </li>
        <li>
          <Link to="/e-secim/signup">
            <button className="nav-button">Üye Ol</button>
          </Link>
        </li>
        <li>
          <Link to="/e-secim/login">
            <button className="nav-button login-button">Giriş Yap</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
