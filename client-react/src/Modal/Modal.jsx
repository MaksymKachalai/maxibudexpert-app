import React from 'react';
import ReactDOM from 'react-dom';
import * as SC from './Modal.styled';
import { MainLogo } from '../components/Common/MainLogo/MainLogo';
import { IoCloseOutline } from 'react-icons/io5';
import { NavigationBar } from '../components/Header/NavBar/NavigationBar';

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <SC.Modal>
      <SC.ModalHeader>
        <MainLogo />
        <button type="button" onClick={onClose}>
          <IoCloseOutline size={30} color="#545454" />
        </button>
      </SC.ModalHeader>
      <SC.ModalNavigationContainer>
        <NavigationBar direction="column" />
      </SC.ModalNavigationContainer>
    </SC.Modal>,
    document.getElementById('modal')
  );
};
