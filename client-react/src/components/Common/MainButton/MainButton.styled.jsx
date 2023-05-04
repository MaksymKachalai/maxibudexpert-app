import styled from 'styled-components';

export const Button = styled.button`
  padding: ${(prop) => prop.theme.space[3]}px;
  border-radius: 5px;
  background-color: ${(prop) => prop.theme.colors.background.accent};
  color: ${(prop) => prop.theme.colors.text.white};
  font-weight: 500;
  white-space: nowrap;
  @media screen and (${(prop) => prop.theme.device.tablet}) {
    font-size: ${(prop) => prop.theme.fontSizes[3]}px;
  }
`;
