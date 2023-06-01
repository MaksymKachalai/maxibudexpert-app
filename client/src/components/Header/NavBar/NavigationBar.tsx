import React from 'react';
import * as SC from './NavigationBar.styled';

interface IDirection {
  flexDirection: 'row' | 'column';
}

export const NavigationBar = ({ flexDirection }: IDirection) => {
  return (
    <nav>
      <SC.NavbarList flexDirection={flexDirection}>
        <SC.NavbarLink to="/services">Наші послуги</SC.NavbarLink>
        <SC.NavbarLink to="/info">Про нас</SC.NavbarLink>
      </SC.NavbarList>
    </nav>
  );
};
