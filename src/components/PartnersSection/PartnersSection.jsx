import React from 'react';
import * as SC from './PartnersSection.styled';
import { Carousel } from '../Carousel/Carousel';

export const PartnersSection = () => {
  return (
    <SC.PartnersSection>
      <SC.Title>Наші партнери</SC.Title>
      <Carousel />
    </SC.PartnersSection>
  );
};
