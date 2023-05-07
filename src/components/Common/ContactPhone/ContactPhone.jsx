import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import * as SC from './ContactPhone.styled';

export const ContactPhone = () => {
  return (
    <SC.ContactPhoneContainer href="tel:380970819231">
      <BiPhoneCall size={22} />
      Дзвінок
    </SC.ContactPhoneContainer>
  );
};
