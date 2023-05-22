import styled from 'styled-components';


export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  border-radius: 5px;

  background-color: ${(prop) => prop.theme.colors.background.white};

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    width: 45%;
  }
  @media screen and (${(prop) => prop.theme.device.laptop}) {
    width: 30%;
  }
  @media screen and (${(prop) => prop.theme.device.desktop}) {
    width: 20%;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 220px;

  padding: 20px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  border-radius: 5px;

  object-fit: cover;
`;

export const Title = styled.h4`
  width: 100%;

  margin-bottom: 15px;

  text-align: center;
  color: ${(prop) => prop.theme.colors.text.accent};
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 180px;
  padding: 10px 10px;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Description = styled.p`
  text-align: center;

  overflow: hidden;
  color: ${(prop) => prop.theme.colors.text.secondary};
`;

