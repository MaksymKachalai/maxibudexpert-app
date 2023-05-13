import styled from 'styled-components';
import { SectionContainer } from '../../../style/globalStyles';
import background from '../../../images/old-buildings-background.jpg';

export const ServicesListSection = styled(SectionContainer)`
  min-height: 100vh;
  padding: 0px;
  padding-top: ${(prop) => prop.theme.space[5]}px;
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  width: 100%;
`;

export const ImageTitle = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 20px;

  background: url(${background}) no-repeat center;
  background-size: cover;
`;