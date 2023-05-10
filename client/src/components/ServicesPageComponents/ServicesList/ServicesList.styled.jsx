import styled from 'styled-components';
import { SectionContainer } from '../../../style/globalStyles';

export const ServicesListSection = styled(SectionContainer)`
  height: 100vh;

  padding-top: ${(prop) => prop.theme.space[5]}px;
`;

export const ServicesList = styled.ul`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
