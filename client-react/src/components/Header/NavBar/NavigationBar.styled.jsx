import styled from 'styled-components';

export const NavbarContainer = styled.nav``;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  gap: 1rem;
`;
