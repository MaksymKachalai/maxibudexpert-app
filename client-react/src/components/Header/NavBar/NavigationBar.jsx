import React from 'react';
import * as SC from './NavigationBar.styled';

export const NavigationBar = ({ direction }) => {
  return (
    <SC.NavbarContainer>
      <SC.NavbarList direction={direction}>
        <SC.NavbarLink>Наші послуги</SC.NavbarLink>
        <SC.NavbarLink>Про нас</SC.NavbarLink>
        <SC.NavbarLink>Блог</SC.NavbarLink>
        <SC.NavbarLink>Контакти</SC.NavbarLink>
      </SC.NavbarList>
    </SC.NavbarContainer>
  );
};
