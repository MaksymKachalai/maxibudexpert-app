import styled from 'styled-components';

export const ServicesItem = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid red;
  visibility: ${(prop) => (prop.isActive ? 'visible' : 'hidden')};
  opacity: ${(prop) => (prop.isActive ? '1' : '0')};
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
`;
