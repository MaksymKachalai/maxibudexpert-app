import React from 'react';
import * as SC from './NavigationBar.styled';

export const NavigationBar = ({ direction }) => {
  return (
    <SC.NavbarContainer>
      <SC.NavbarList direction={direction}>
        <SC.NavbarLink to="/services">Наші послуги</SC.NavbarLink>
        <SC.NavbarLink to="/info">Про нас</SC.NavbarLink>
        <SC.NavbarLink to="/blog">Блог</SC.NavbarLink>
      </SC.NavbarList>
    </SC.NavbarContainer>
  );
};
