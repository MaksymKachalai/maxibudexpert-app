import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IDirection {
  flexDirection: 'row' | 'column';
}

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: ${({ flexDirection }: IDirection) => flexDirection};
  align-items: center;
  gap: 1rem;
`;

export const NavbarLink = styled(NavLink)`
  display: block;

  padding: ${(prop) => prop.theme.space[2]}px;

  border-radius: 5px;

  font-weight: 500;
  text-decoration: none;

  color: ${(prop) => prop.theme.colors.text.secondary};

  &:hover {
    background-color: ${(prop) => prop.theme.colors.background.accent};
    color: ${(prop) => prop.theme.colors.text.white};
  }
`;
