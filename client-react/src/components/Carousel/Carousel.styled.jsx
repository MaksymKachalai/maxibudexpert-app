import styled from 'styled-components';

export const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 150px;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  ${(prop) => prop.side}: 1%;
  z-index: 50;
  border-radius: 5px;
  background-color: ${(prop) => prop.theme.colors.background.secondary};
  width: 45px;
  height: 45px;
  &:active {
    background-color: ${(prop) => prop.theme.colors.background.accent};
  }
`;

export const ImageContainer = styled.div`
  width: 60%;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;
