import styled from 'styled-components';

export const ExtendedPrioritiesSection = styled.section`
  width: 100%;
  padding-top: 45px;

  max-width: 1200px;

  margin: 0 auto;
`;

export const ListTextBoxes = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;

  padding-left: 30px;
  padding-right: 30px;

  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    padding-left: 45px;
    padding-right: 45px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media screen and (min-width: 1201px) {
    width: 1200px;
    padding: 0px;

    margin: 0 auto;
    margin-bottom: 50px;
  }
`;

export const TextBox = styled.li``;

export const TitleTextBox = styled.h2`
  margin-bottom: 20px;

  color: ${(prop) => prop.theme.colors.text.accent};
`;

export const InfoTextBox = styled.span`
  color: ${(prop) => prop.theme.colors.text.secondary};
`;

export const MissionList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const MissionItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 500px;

  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;

export const MissionImage = styled.img`
  display: block;

  width: 100%;
  height: 300px;

  object-fit: cover;
`;

export const MissionCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  height: 300px;

  padding-left: 30px;
  padding-right: 30px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const CaptionTitle = styled.p`
  font-size: 20px;
  font-weight: 600;

  color: ${(prop) => prop.theme.colors.text.white};
`;

export const CaptionDescription = styled.p`
  text-align: center;

  color: ${(prop) => prop.theme.colors.text.white};
`;
