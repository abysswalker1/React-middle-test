import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/_common/header/header';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;