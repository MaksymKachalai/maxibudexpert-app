import React from 'react';
import * as SC from './ServicesItem.styled';

export const ServicesItem = ({ activeItem }) => {
  return (
    <SC.ServicesItem isActive={activeItem === 'flat'}>
      <h3>Ремонт “з нуля під ключ”</h3>
    </SC.ServicesItem>
  );
};
