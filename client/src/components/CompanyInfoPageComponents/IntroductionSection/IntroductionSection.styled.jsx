import styled from 'styled-components';
import { Button } from 'components/Common/MainButton/MainButton.styled';
import { HashLink } from 'react-router-hash-link';

export const IntroductionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  max-width: 490px;

  padding: 30px 10px;
  padding-top: 90px;

  margin: auto;

  @media screen and (${(prop) => prop.theme.device.tablet}) {
  }
`;

export const TitleIntroduction = styled.h2`
  text-align: center;

  color: ${(prop) => prop.theme.colors.text.secondary};

  & span {
    color: ${(prop) => prop.theme.colors.text.accent};
  }
  @media screen and (${(prop) => prop.theme.device.tablet}) {
    font-size: 28px;
  }
`;

export const DescriptionIntroduction = styled.p`
  margin-bottom: 10px;

  text-align: center;
  font-size: 0.9rem;
  color: ${(prop) => prop.theme.colors.text.secondary};

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    font-size: ${(prop) => prop.theme.fontSizes[2]}px;
  }
`;

export const HeroButtonMain = styled(Button)`
  padding: ${(prop) => prop.theme.space[2]}px ${(prop) => prop.theme.space[2]}px;

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    padding: ${(prop) => prop.theme.space[3]}px ${(prop) => prop.theme.space[2]}px;
  }
`;

export const HashLinkStyled = styled(HashLink)`
  display: block;
  border-radius: 5px;

  background-color: ${(prop) => prop.theme.colors.background.accent};
  color: ${(prop) => prop.theme.colors.text.white};

  white-space: nowrap;

  cursor: pointer;

  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  padding: ${(prop) => prop.theme.space[2]}px ${(prop) => prop.theme.space[2]}px;

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    padding: ${(prop) => prop.theme.space[3]}px ${(prop) => prop.theme.space[2]}px;
  }
`;
