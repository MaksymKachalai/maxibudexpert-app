import styled from 'styled-components';

export const Card = styled.li`
  position: relative;
  padding: 10px;
  width: 90%;
  min-height: 60px;
  border-radius: 5px;

  background-color: ${(prop) => prop.theme.colors.background.secondary};
`;

export const CardBox = styled.div`
  position: relative;
`;

export const Title = styled.h4`
  color: ${(prop) => prop.theme.colors.text.secondary};
`;

export const Description = styled.p`
  padding: 20px 5px 5px 5px;
  display: ${(prop) => {
    if (!prop.isOpen) {
      return 'none';
    }
    return 'block';
  }};
  color: ${(prop) => prop.theme.colors.text.secondary};
`;

export const ActiveIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: ${(prop) => {
    if (!prop.isOpen) {
      return 'rotate(90deg) translateX(-50%)';
    }
    return 'rotate(180deg) translateY(50%)';
  }};
`;
