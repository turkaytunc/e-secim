import React from 'react';
import './header.scss';

const Header = (): JSX.Element => {
  return (
    <nav className="header-container">
      <div className="corp-logo-container">Logo</div>
      <div className="project-title">Elektronik Seçim Uygulamasına Hoş Geldiniz.</div>
      <ul className="nav-link-container">
        <li>
          <input className="nav-search-box" type="search" placeholder="Ara" />
        </li>
        <li>link1</li>
        <li>link2</li>
      </ul>
    </nav>
  );
};

export default Header;
