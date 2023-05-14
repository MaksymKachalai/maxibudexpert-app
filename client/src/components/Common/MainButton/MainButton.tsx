import { ReactNode } from 'react';
import * as SC from './MainButton.styled';

interface IMainButton {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
  children: ReactNode;
}

export const MainButton = ({ children, type = 'button', onClick }: IMainButton) => {
  return (
    <SC.Button type={type} onClick={onClick}>
      {children}
    </SC.Button>
  );
};
