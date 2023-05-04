import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.nav``;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  gap: 1rem;
`;

export const NavbarLink = styled(NavLink)`
  display: block;
  padding: ${(prop) => prop.theme.space[2]}px;
  text-decoration: none;
  color: ${(prop) => prop.theme.colors.text.secondary};
  font-weight: 500;
  border-radius: 5px;

  &:hover {
    background-color: ${(prop) => prop.theme.colors.background.accent};
    color: ${(prop) => prop.theme.colors.text.white};
  }
`;
