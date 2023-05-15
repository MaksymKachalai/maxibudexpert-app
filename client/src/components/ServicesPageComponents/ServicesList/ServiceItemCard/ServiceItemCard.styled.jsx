import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 280px;
  min-height: 220px;

  padding: 15px;

  border-radius: 5px;

  background-color: ${(prop) => prop.theme.colors.background.secondary};
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h4`
  color: ${(prop) => prop.theme.colors.text.secondary};
`;

export const Description = styled.p`
  text-align: center;

  color: ${(prop) => prop.theme.colors.text.secondary};
`;


