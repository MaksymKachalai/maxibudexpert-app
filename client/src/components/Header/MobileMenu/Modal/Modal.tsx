import React from 'react';
import ReactDOM from 'react-dom';
import * as SC from './Modal.styled';
import { MainLogo } from '../../../Common/MainLogo/MainLogo';
import { IoCloseOutline } from 'react-icons/io5';
import { NavigationBar } from '../../NavBar/NavigationBar';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: IModal) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <SC.Modal onClick={onClose}>
      <SC.ModalHeader>
        <MainLogo />
        <button type="button" onClick={onClose}>
          <IoCloseOutline size={40} color="#545454" />
        </button>
      </SC.ModalHeader>
      <SC.ModalNavigationContainer>
        <NavigationBar flexDirection="column" />
      </SC.ModalNavigationContainer>
    </SC.Modal>,
    document.getElementById('modal') as HTMLElement
  );
};
