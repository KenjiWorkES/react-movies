import React from 'react';
import Header from '@/components/organisms/Header';
import './styles.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
