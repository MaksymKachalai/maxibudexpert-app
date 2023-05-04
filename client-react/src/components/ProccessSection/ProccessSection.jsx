import React from 'react';
import * as SC from './ProccessSection.styled';
import { FcSurvey, FcSportsMode, FcInspection, FcManager, FcEngineering } from 'react-icons/fc';

export const ProccessSection = () => {
  return (
    <SC.Proccess>
      <SC.Title>Як ми працюємо</SC.Title>
      <SC.List>
        <SC.Item>
          <SC.Dot></SC.Dot>
          <SC.Card>
            <SC.CardIcon>
              <FcSurvey size={60} />
            </SC.CardIcon>
            <SC.CartText>Залиште заявку</SC.CartText>
          </SC.Card>
        </SC.Item>
        <SC.Item>
          <SC.Dot></SC.Dot>
          <SC.Card>
            <SC.CardIcon>
              <FcManager size={60} />
            </SC.CardIcon>
            <SC.CartText>Консультація фахівця</SC.CartText>
          </SC.Card>
        </SC.Item>
        <SC.Item>
          <SC.Dot></SC.Dot>
          <SC.Card>
            <SC.CardIcon>
              <FcSportsMode size={60} />
            </SC.CardIcon>
            <SC.CartText> Виїзд фахівця на обєкт</SC.CartText>
          </SC.Card>
        </SC.Item>
        <SC.Item>
          <SC.Dot></SC.Dot>
          <SC.Card>
            <SC.CardIcon>
              <FcInspection size={60} />
            </SC.CardIcon>
            <SC.CartText>Складення кошторису</SC.CartText>
          </SC.Card>
        </SC.Item>
        <SC.Item>
          <SC.Dot></SC.Dot>
          <SC.Card>
            <SC.CardIcon>
              <FcEngineering size={60} />
            </SC.CardIcon>
            <SC.CartText>Виконання роботи</SC.CartText>
          </SC.Card>
        </SC.Item>
      </SC.List>
    </SC.Proccess>
  );
};
