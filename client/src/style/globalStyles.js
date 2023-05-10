import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-right: ${(prop) => prop.theme.space[3]}px;
  padding-left: ${(prop) => prop.theme.space[3]}px;
  padding-top: ${(prop) => prop.theme.space[4]}px;
  padding-bottom: ${(prop) => prop.theme.space[4]}px;
`;
