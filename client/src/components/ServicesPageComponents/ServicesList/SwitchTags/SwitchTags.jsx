import React from 'react';
import * as SC from './SwitchTags.styled';

export const SwitchTags = ({ activeItem, handleButtonClick }) => {
  return (
    <SC.SwitchButtonContainer>
      <SC.SwitchButton type="button" name="flat" isActive={activeItem === 'flat'} onClick={handleButtonClick}>
        Квартири
      </SC.SwitchButton>
      <SC.SwitchButton type="button" name="house" isActive={activeItem === 'house'} onClick={handleButtonClick}>
        Будинки
      </SC.SwitchButton>
      <SC.SwitchButton
        type="button"
        name="commercial"
        isActive={activeItem === 'commercial'}
        onClick={handleButtonClick}
      >
        Комерція
      </SC.SwitchButton>
    </SC.SwitchButtonContainer>
  );
};
