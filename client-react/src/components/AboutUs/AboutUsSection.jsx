import React from 'react';
import * as SC from './AboutUsSection.styled';

export const AboutUsSection = () => {
  return (
    <SC.AboutUs>
      <SC.AboutUsTitle>About Us</SC.AboutUsTitle>
      <SC.AboutUsSubtitleAccent>10+</SC.AboutUsSubtitleAccent>
      <SC.AboutUsSubtitle>років успішної роботи</SC.AboutUsSubtitle>
      <SC.TitleLine />
      <p>
        Наша компанія має багаторічний досвід роботи в галузі ремонту квартир та будинків. За цей час ми успішно
        виконували проекти будь-якої складності і вимог, забезпечуючи нашим клієнтам якісні послуги.
      </p>
    </SC.AboutUs>
  );
};
