import React from 'react';
import './header.scss';
import vote from '../../static-files/vote.jpg';

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
          <input className="nav-search-box" type="search" placeholder="Ara" />
        </li>
        <li>link1</li>
        <li>link2</li>
      </ul>
    </nav>
  );
};

export default Header;
