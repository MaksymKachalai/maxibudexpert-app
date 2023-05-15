import styled from 'styled-components';
import { SectionContainer } from '../../../style/globalStyles';
import background from '../../../images/old-buildings-background.jpg';

export const ServicesListSection = styled(SectionContainer)`
  min-height: 100vh;
  padding: ${(prop) => prop.theme.space[3]}px;
  padding-top: 80px;
`;

export const Title = styled.h2`
  margin-bottom: ${(prop) => prop.theme.space[4]}px;
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;

  width: 100%;
`;

export const ImageTitle = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 20px;

  background: url(${background}) no-repeat center;
  background-size: cover;
`;