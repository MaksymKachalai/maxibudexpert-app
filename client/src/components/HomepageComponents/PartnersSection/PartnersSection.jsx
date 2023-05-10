import React from 'react';
import * as SC from './PartnersSection.styled';
import { SectionContainer } from '../../../style/globalStyles';
import { Carousel } from '../Carousel/Carousel';

export const PartnersSection = () => {
  return (
    <SectionContainer>
      <SC.Title>Наші партнери</SC.Title>
      <Carousel />
    </SectionContainer>
  );
};
