import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  width: 100%;

  padding: ${(prop) => prop.theme.space[2]}px ${(prop) => prop.theme.space[3]}px;

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    padding: ${(prop) => prop.theme.space[3]}px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
