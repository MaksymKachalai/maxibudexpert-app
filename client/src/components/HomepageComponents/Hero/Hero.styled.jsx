import styled from 'styled-components';
import heroBackgroundDesktop from 'images/homepage/hero/heroBackground_desktop.jpg';
import heroBackgroundTablet from 'images/homepage/hero/heroBackground_tablet.jpg';
import heroBackgroundMobile from 'images/homepage/hero/heroBackground_mobile.jpg';
import { Button } from '../../Common/MainButton/MainButton.styled';
import { HashLink } from 'react-router-hash-link';

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: 100vh;
  width: 100%;

  padding: ${(prop) => prop.theme.space[4]}px ${(prop) => prop.theme.space[3]}px;

  background-image: url(${heroBackgroundMobile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${heroBackgroundTablet});
  }

  @media screen and (min-width: 1200px) {
    background-image: url(${heroBackgroundDesktop});
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${(prop) => prop.theme.fontSizes[5]}px;

  color: ${(prop) => prop.theme.colors.text.accent};

  text-align: center;

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    font-size: ${(prop) => prop.theme.fontSizes[6]}px;
  }
`;

export const HeroSubtitle = styled.h2`
  margin-bottom: ${(prop) => prop.theme.space[3]}px;

  text-align: center;

  font-size: ${(prop) => prop.theme.fontSizes[2]}px;
  font-weight: ${(prop) => prop.theme.fontWeights.body};
  color: ${(prop) => prop.theme.colors.text.secondary};

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    font-size: ${(prop) => prop.theme.fontSizes[3]}px;
  }
`;

export const HeroButtonMain = styled(Button)`
  padding: ${(prop) => prop.theme.space[3]}px ${(prop) => prop.theme.space[2]}px;
`;

export const HashLinkStyled = styled(HashLink)`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
`;
