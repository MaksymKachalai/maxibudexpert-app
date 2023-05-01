import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  padding: ${(prop) => prop.theme.space[2]}px;
  background-color: ${(prop) => prop.theme.colors.background.white};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalNavigationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
