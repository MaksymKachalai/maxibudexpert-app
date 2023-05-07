import styled from 'styled-components';

export const Button = styled.button`
  padding: ${(prop) => prop.theme.space[3]}px;
  border-radius: 5px;
  background-color: ${(prop) => prop.theme.colors.background.accent};
  color: ${(prop) => prop.theme.colors.text.white};
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
`;
