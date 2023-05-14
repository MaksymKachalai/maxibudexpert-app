import { MainLogo } from '../Common/MainLogo/MainLogo';
import * as SC from './Footer.styled';

export const Footer = () => {
  return (
    <SC.Footer>
      <SC.LogoContainer>
        <MainLogo />
      </SC.LogoContainer>
    </SC.Footer>
  );
};
