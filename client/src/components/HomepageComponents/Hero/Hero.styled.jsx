import styled from 'styled-components';
import background from '../../../images/background.jpg';
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

  padding-right: ${(prop) => prop.theme.space[3]}px;
  padding-left: ${(prop) => prop.theme.space[3]}px;
  padding-top: ${(prop) => prop.theme.space[4]}px;
  padding-bottom: ${(prop) => prop.theme.space[4]}px;

  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

  font-size: ${(prop) => prop.theme.fontSizes[2]}px;
  font-weight: ${(prop) => prop.theme.fontWeights.body};
  color: ${(prop) => prop.theme.colors.text.secondary};

  text-align: center;
  @media screen and (${(prop) => prop.theme.device.tablet}) {
    font-size: ${(prop) => prop.theme.fontSizes[3]}px;
  }
`;

export const HeroButtonMain = styled(Button)`
  padding-right: ${(prop) => prop.theme.space[2]}px;
  padding-left: ${(prop) => prop.theme.space[2]}px;
  padding-top: ${(prop) => prop.theme.space[3]}px;
  padding-bottom: ${(prop) => prop.theme.space[3]}px;
`;

export const HashLinkStyled = styled(HashLink)`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
`;
