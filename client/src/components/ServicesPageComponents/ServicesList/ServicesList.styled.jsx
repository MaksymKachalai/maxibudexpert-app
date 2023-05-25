import styled from 'styled-components';
import { SectionContainer } from '../../../style/globalStyles';

export const ServicesListSection = styled(SectionContainer)`
  min-height: 100vh;
  padding: ${(prop) => prop.theme.space[3]}px;
  padding-top: 80px;
`;

export const Title = styled.h2`
  margin-bottom: ${(prop) => prop.theme.space[4]}px;

  color: ${(prop) => prop.theme.colors.text.secondary};
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;

  width: 100%;
`;

