import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  padding-right: ${(prop) => prop.theme.space[3]}px;
  padding-left: ${(prop) => prop.theme.space[3]}px;
  padding-top: ${(prop) => prop.theme.space[3]}px;
  padding-bottom: ${(prop) => prop.theme.space[3]}px;

  background-color: ${(prop) => prop.theme.colors.background.secondary};

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    background-color: transparent;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
