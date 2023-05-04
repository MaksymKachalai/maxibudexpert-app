import styled from 'styled-components';

export const Proccess = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-right: ${(prop) => prop.theme.space[3]}px;
  padding-left: ${(prop) => prop.theme.space[3]}px;
  padding-top: ${(prop) => prop.theme.space[5]}px;
  padding-bottom: ${(prop) => prop.theme.space[5]}px;
`;

export const Title = styled.h2`
  margin-bottom: ${(prop) => prop.theme.space[4]}px;

  color: ${(prop) => prop.theme.colors.text.secondary};

  text-align: center;

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    font-size: ${(prop) => prop.theme.fontSizes[5]}px;
  }
`;

export const List = styled.ul`
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${(prop) => prop.theme.device.laptop}) {
    flex-direction: row;
  }
`;

export const Item = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;

  border-left: 5px solid ${(prop) => prop.theme.colors.secondary};
  @media screen and (${(prop) => prop.theme.device.laptop}) {
    border-left: none;
    border-bottom: 5px solid ${(prop) => prop.theme.colors.secondary};
  }
`;

export const Dot = styled.span`
  position: absolute;
  top: 50%;
  left: -18px;
  transform: translateY(-50%);

  height: 30px;
  width: 30px;
  border-radius: 50%;

  background-color: ${(prop) => prop.theme.colors.background.accent};
  @media screen and (${(prop) => prop.theme.device.laptop}) {
    top: 100%;
    left: 50%;
    transform: translate(-50%, -45%);
  }
`;

export const Card = styled.div`
  position: relative;
  width: 80%;
  max-width: 550px;
  height: 150px;
  border-radius: 5px;

  background-color: ${(prop) => prop.theme.colors.background.secondary};
`;

export const CardIcon = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

export const CartText = styled.span`
  width: 100%;
  position: absolute;
  bottom: 10%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);

  padding: ${(prop) => prop.theme.space[2]}px;
  font-weight: 500;
  color: ${(prop) => prop.theme.colors.text.accent};
`;
