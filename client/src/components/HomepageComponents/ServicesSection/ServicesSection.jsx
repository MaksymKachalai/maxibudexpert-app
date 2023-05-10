import React from 'react';
import * as SC from './ServicesSection.styled';
import commercialImage from '../../../images/commercial-background.jpg';
import appartmentImage from '../../../images/old-buildings-background.jpg';
import houseImage from '../../../images/private-house-background.jpg';
import { SectionContainer } from '../../../style/globalStyles';

export const ServicesSection = () => {
  return (
    <SectionContainer id="service">
      <SC.ServicesTitle>Наші послуги</SC.ServicesTitle>
      <SC.TitleLine></SC.TitleLine>
      <SC.ServicesList>
        <SC.ServicesItem background={appartmentImage}>
          <SC.ServicesCardTitle>Ремонт квартир</SC.ServicesCardTitle>
          <SC.CardButton type="button">Дізнатися більше</SC.CardButton>
        </SC.ServicesItem>
        <SC.ServicesItem background={houseImage}>
          <SC.ServicesCardTitle>Ремонт будинків</SC.ServicesCardTitle>
          <SC.CardButton type="button">Дізнатися більше</SC.CardButton>
        </SC.ServicesItem>
        <SC.ServicesItem background={commercialImage}>
          <SC.ServicesCardTitle>Ремонт комерційної нерухомості</SC.ServicesCardTitle>
          <SC.CardButton type="button">Дізнатися більше</SC.CardButton>
        </SC.ServicesItem>
      </SC.ServicesList>
    </SectionContainer>
  );
};
