import React, { useState } from 'react';
import { FcCollapse } from 'react-icons/fc';
import * as SC from './ServiceItemCard.styled';

export const ServiceItemCard = ({ title, description, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SC.Card onClick={handleClick}>
      <SC.CardBox>
        <div>{children}</div>
        <SC.Title>{title}</SC.Title>
        <SC.ActiveIcon isOpen={isOpen}>
          <FcCollapse size={25} />
        </SC.ActiveIcon>
      </SC.CardBox>
      <SC.Description isOpen={isOpen}>{description}</SC.Description>
    </SC.Card>
  );
};
