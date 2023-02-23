import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <>
      <div className="content">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
