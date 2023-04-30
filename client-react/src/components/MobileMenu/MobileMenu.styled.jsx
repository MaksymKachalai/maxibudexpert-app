import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${(prop) => prop.theme.space[2]}px;
  opacity: ${(prop) => (prop.open ? 1 : 0)};
  pointer-events: ${(prop) => (prop.open ? 'all' : 'none')};
  transition: all 2000ms ease-in-out;

  background-color: blue;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
