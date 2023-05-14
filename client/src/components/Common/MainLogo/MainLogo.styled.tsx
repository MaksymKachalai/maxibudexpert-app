import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LogoText = styled.span`
  font-size: ${(prop) => prop.theme.fontSizes[2]}px;
  font-weight: ${(prop) => prop.theme.fontWeights.bold};
  color: ${(prop) => prop.theme.colors.secondary};
`;

export const LogoTextAccent = styled(LogoText)`
  color: ${(prop) => prop.theme.colors.text.accent};
`;
