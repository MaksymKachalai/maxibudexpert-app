import React from 'react';
import * as SC from './NavigationBar.styled';

export const NavigationBar = ({ direction }) => {
  return (
    <SC.NavbarContainer>
      <SC.NavbarList direction={direction}>
        <li>Наші послуги</li>
        <li>Про нас</li>
        <li>Блог</li>
        <li>Контакти</li>
      </SC.NavbarList>
    </SC.NavbarContainer>
  );
};
