import styled from 'styled-components';
import image from 'images/companyinfopage/introBackground.jpg';

export const PrioritiesSection = styled.section`
  position: relative;

  width: 100%;
  height: 400px;

  &::before {
    content: '';
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(50%);
  }

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    height: 200px;
  }
`;

export const ListPriorities = styled.ul`
  position: absolute;
  z-index: 50;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    flex-direction: row;
    gap: 10px;
  }
  @media screen and (${(prop) => prop.theme.device.laptop}) {
    flex-direction: row;
    gap: 30px;
  }
  @media screen and (${(prop) => prop.theme.device.laptopL}) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const ItemPriorities = styled.li`
  padding: 10px;

  text-align: center;
  white-space: nowrap;

  border-radius: 5px;

  font-size: 22px;
  font-weight: 700;

  color: ${(prop) => prop.theme.colors.text.white};

  background-color: ${(prop) => prop.theme.colors.accent};
`;
