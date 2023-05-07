import React from 'react';
import * as SC from './MainButton.styled';

export const MainButton = ({ children, type, onClick }) => {
  return (
    <SC.Button type={type} onClick={onClick}>
      {children}
    </SC.Button>
  );
};
