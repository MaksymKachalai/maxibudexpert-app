import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: ${(prop) => prop.theme.space[3]}px;

  background-color: ${(prop) => prop.theme.colors.background.accent};
`;

export const LogoContainer = styled.div`
  background-color: ${(prop) => prop.theme.colors.background.white};
  padding: ${(prop) => prop.theme.space[1]}px;

  border-radius: 5px;
`;
