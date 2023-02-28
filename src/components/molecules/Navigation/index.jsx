import React from 'react';
import './styles.scss';

import { NavigationItem } from '@/components/atoms';

const index = () => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <NavigationItem iconId="all" path="/" />
        <NavigationItem iconId="movies" path="/movies" />
        <NavigationItem iconId="tv" path="/tv-shows" />
        <NavigationItem iconId="bookmark" path="/favorites" />
      </ul>
    </nav>
  );
};

export default index;
