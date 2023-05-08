import styled from 'styled-components';

export const Button = styled.button`
  height: 66px;
  width: 100%;
  border-radius: 25px;

  background-color: ${(prop) => prop.theme.colors.background.accent};

  font-size: 20px;
  font-weight: 600;

  color: $white-color;
`;
