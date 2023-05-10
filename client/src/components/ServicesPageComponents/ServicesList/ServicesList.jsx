import React, { useState } from 'react';
import * as SC from './ServicesList.styled';
import { SwitchTags } from './SwitchTags/SwitchTags';

export const ServicesList = () => {
  const [activeItem, setActiveItem] = useState('flat');

  const handleButtonClick = (e) => {
    const { name } = e.target;
    if (activeItem === name) {
      return;
    }
    setActiveItem(name);
  };

  return (
    <SC.ServicesListSection>
      <h2>Наші послуги</h2>
      <SwitchTags handleButtonClick={handleButtonClick} activeItem={activeItem} />
    </SC.ServicesListSection>
  );
};
