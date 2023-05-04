import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import * as SC from './ContactPhone.styled';

export const ContactPhone = () => {
  return (
    <SC.ContactPhoneContainer>
      <BiPhoneCall size={22} />
      <SC.ContactPhoneLink href="tel:380970819231">Дзвінок</SC.ContactPhoneLink>
    </SC.ContactPhoneContainer>
  );
};
