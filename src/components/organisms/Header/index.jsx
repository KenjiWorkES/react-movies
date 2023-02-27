import React from 'react';
import { Navigation } from '@/components/molecules';
import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src="/assets/logo.png" alt="Logo Image" />
        <Navigation />
        <img
          className="header__user"
          src="/assets/user.png"
          alt="Avatar Image"
        />
      </div>
    </header>
  );
};

export default Header;
