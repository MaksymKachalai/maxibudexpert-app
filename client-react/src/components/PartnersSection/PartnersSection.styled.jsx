import styled from 'styled-components';

export const PartnersSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: ${(prop) => prop.theme.space[3]}px;
  padding-left: ${(prop) => prop.theme.space[3]}px;
  padding-top: ${(prop) => prop.theme.space[4]}px;
  padding-bottom: ${(prop) => prop.theme.space[4]}px;
`;

export const Title = styled.h2`
  margin-bottom: ${(prop) => prop.theme.space[2]}px;
`;
