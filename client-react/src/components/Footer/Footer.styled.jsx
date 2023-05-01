import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: ${(prop) => prop.theme.space[3]}px;
  padding-left: ${(prop) => prop.theme.space[3]}px;
  padding-top: ${(prop) => prop.theme.space[4]}px;
  padding-bottom: ${(prop) => prop.theme.space[4]}px;

  background-color: ${(prop) => prop.theme.colors.background.accent};
`;

export const LogoContainer = styled.div`
  background-color: ${(prop) => prop.theme.colors.background.white};
  padding: ${(prop) => prop.theme.space[1]}px;

  border-radius: 5px;
`;
