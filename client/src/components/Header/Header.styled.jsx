import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  padding-right: ${(prop) => prop.theme.space[3]}px;
  padding-left: ${(prop) => prop.theme.space[3]}px;
  padding-top: ${(prop) => prop.theme.space[2]}px;
  padding-bottom: ${(prop) => prop.theme.space[2]}px;

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    background-color: transparent;
    padding-right: ${(prop) => prop.theme.space[3]}px;
    padding-left: ${(prop) => prop.theme.space[3]}px;
    padding-top: ${(prop) => prop.theme.space[3]}px;
    padding-bottom: ${(prop) => prop.theme.space[3]}px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
