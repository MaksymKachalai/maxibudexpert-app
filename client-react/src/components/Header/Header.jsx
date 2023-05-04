import React from 'react';
import * as SC from './Header.styled';
import { MainLogo } from '../Common/MainLogo/MainLogo';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useMediaQuery } from '../../hooks/UseMediaQuery/UseMediaQuery';
import { DesktopMenu } from '../DesktopMenu/DesktopMenu';
import { ContactPhone } from '../Common/ContactPhone/ContactPhone';

export const Header = () => {
  const matches = useMediaQuery('(min-width:1024px)');

  return (
    <SC.Header>
      <SC.HeaderContainer>
        <MainLogo />
        {matches ? <DesktopMenu /> : <MobileMenu />}
        {matches ? <ContactPhone /> : null}
      </SC.HeaderContainer>
    </SC.Header>
  );
};
