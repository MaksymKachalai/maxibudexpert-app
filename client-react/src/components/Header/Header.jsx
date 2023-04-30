import React from 'react';
import * as SC from './Header.styled';
import { MainLogo } from '../Common/MainLogo/MainLogo';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export const Header = () => {
  return (
    <SC.Header>
      <SC.HeaderContainer>
        <MainLogo />
        <MobileMenu />
      </SC.HeaderContainer>
    </SC.Header>
  );
};
