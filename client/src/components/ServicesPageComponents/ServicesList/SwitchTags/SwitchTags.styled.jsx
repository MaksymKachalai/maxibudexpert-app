import styled from 'styled-components';

export const SwitchButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SwitchButton = styled.button`
  padding: 5px;
  background-color: ${(prop) => (prop.isActive ? 'red' : 'green')};
`;
