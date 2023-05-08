import React from 'react';
import { FcManager, FcCustomerSupport, FcBriefcase } from 'react-icons/fc';
import * as SC from './AboutUsSection.styled';

export const AboutUsSection = () => {
  return (
    <SC.AboutUs>
      <SC.AboutUsTitle>About Us</SC.AboutUsTitle>
      <SC.AboutUsSubtitleAccent>10+</SC.AboutUsSubtitleAccent>
      <SC.AboutUsSubtitle>років успішної роботи</SC.AboutUsSubtitle>
      <SC.TitleLine />
      <SC.AboutUsDescription>
        Наша компанія має багаторічний досвід роботи в галузі ремонту квартир та будинків. За цей час ми успішно
        виконували проекти будь-якої складності і вимог, забезпечуючи нашим клієнтам якісні послуги.
      </SC.AboutUsDescription>
      <SC.AboutUsList>
        <SC.AboutUsItem>
          <SC.ItemIcon>
            <FcBriefcase size={70} />
          </SC.ItemIcon>
          <SC.ItemNumber>198</SC.ItemNumber>
          <SC.ItemTitle>Проектів виконано</SC.ItemTitle>
        </SC.AboutUsItem>
        <SC.AboutUsItem>
          <SC.ItemIcon>
            <FcManager size={70} />
          </SC.ItemIcon>
          <SC.ItemNumber>97%</SC.ItemNumber>
          <SC.ItemTitle>Задоволених клієнтів</SC.ItemTitle>
        </SC.AboutUsItem>
        <SC.AboutUsItem>
          <SC.ItemIcon>
            <FcCustomerSupport size={70} />
          </SC.ItemIcon>
          <SC.ItemNumber>73%</SC.ItemNumber>
          <SC.ItemTitle>Повторних звернень</SC.ItemTitle>
        </SC.AboutUsItem>
      </SC.AboutUsList>
    </SC.AboutUs>
  );
};
