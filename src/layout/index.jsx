import React from 'react';
import Header from '@/components/organisms/Header';
import './styles.scss';
import Svg from '@/components/ions/Svg';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Svg />
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
