import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Modal } from '../../Modal/Modal';

export const MobileMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState();

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        <FiMenu size={30} color="#545454" />
      </button>
      <Modal isOpen={isModalOpen} onClose={handleClick} />
    </>
  );
};
