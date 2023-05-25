import styled from 'styled-components';

export const ListContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  padding: 15px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  min-height: 60px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const ControlsButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const RightButton = styled.button`
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  border-radius: 5px;

  background-color: ${(prop) => prop.theme.colors.background.secondary};

  &:hover {
    transform: translateY(-50%) scale(1.05);
  }
  &:active {
    transform: translateY(-50%) scale(1);
    background-color: ${(prop) => prop.theme.colors.background.accent};
  }
`;

export const LeftButton = styled(RightButton)`
  right: auto;
  left: 2%;
`;
