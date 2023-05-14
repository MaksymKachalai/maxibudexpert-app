import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface IBackground {
  background: string;
}

export const ServicesTitle = styled.h2`
  margin-bottom: ${(prop) => prop.theme.space[3]}px;

  color: ${(prop) => prop.theme.colors.text.accent};

  text-align: center;

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    font-size: ${(prop) => prop.theme.fontSizes[5]}px;
  }
`;

export const TitleLine = styled.span`
  display: inline-block;

  width: 60px;
  height: 3px;

  margin-bottom: ${(prop) => prop.theme.space[4]}px;

  border-radius: 25px;

  background-color: ${(prop) => prop.theme.colors.background.accent};
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    flex-direction: row;
  }
`;

export const ServicesItem = styled.li`
  position: relative;

  width: 100%;
  height: 300px;

  border-radius: 5px;

  background-image: url(${({ background }: IBackground) => background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (${(prop) => prop.theme.device.laptop}) {
    height: 350px;
  }

  @media screen and (${(prop) => prop.theme.device.laptopL}) {
    height: 400px;
  }
`;

export const ServicesCardTitle = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  max-width: 500px;

  padding-top: ${(prop) => prop.theme.space[2]}px;
  padding-bottom: ${(prop) => prop.theme.space[2]}px;

  border-radius: 5px;

  background-color: ${(prop) => prop.theme.colors.background.white};

  text-align: center;

  font-size: ${(prop) => prop.theme.fontSizes[3]}px;
  color: ${(prop) => prop.theme.colors.text.secondary};

  @media screen and (${(prop) => prop.theme.device.laptop}) {
    font-size: ${(prop) => prop.theme.fontSizes[4]}px;
  }
`;

export const CardButton = styled(NavLink)`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);

  padding: ${(prop) => prop.theme.space[2]}px;

  border-radius: 5px;

  background-color: ${(prop) => prop.theme.colors.background.accent};

  color: ${(prop) => prop.theme.colors.text.white};

  transition: transform 250ms ease-in-out;

  &:hover {
    transform: translateX(-50%) scale(1.05);
  }
`;
