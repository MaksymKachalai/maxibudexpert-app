import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import * as SC from './Layout.styled';

export const Layout = () => {
  return (
    <SC.Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </SC.Wrapper>
  );
};
