import React, { useState } from 'react';
import * as SC from './MobileMenu.styled';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import { MainLogo } from '../Common/MainLogo/MainLogo';
import { NavigationBar } from '../Header/NavBar/NavigationBar';

export const MobileMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState();

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {!isModalOpen ? (
        <button type="button" onClick={handleClick}>
          <FiMenu size={40} color="#545454" />
        </button>
      ) : null}
      <SC.Modal open={isModalOpen}>
        <SC.ModalHeader>
          <MainLogo />
          <button type="button" onClick={handleClick}>
            <IoCloseOutline />
          </button>
        </SC.ModalHeader>
        <NavigationBar direction="column" />
      </SC.Modal>
    </>
  );
};
