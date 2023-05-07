import React from 'react';
import * as SC from './DesktopMenu.styled';
import { NavigationBar } from '../Header/NavBar/NavigationBar';

export const DesktopMenu = () => {
  return (
    <SC.DesktopMenu>
      <NavigationBar />
    </SC.DesktopMenu>
  );
};
