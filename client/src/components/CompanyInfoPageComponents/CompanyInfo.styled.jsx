import styled from 'styled-components';

export const CompanyInfoSection = styled.section`
  min-height: 100vh;
  padding-top: 90px;
  padding-bottom: 45px;
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  max-width: 490px;

  padding: 10px;

  margin: auto;

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    flex-direction: row;
    align-items: flex-end;

    max-width: 100%;
  }
`;

export const TitleIntroduction = styled.h3`
  text-align: center;

  padding: 10px;

  color: ${(prop) => prop.theme.colors.text.accent};

  & span {
    color: ${(prop) => prop.theme.colors.text.secondary};
  }
  @media screen and (${(prop) => prop.theme.device.tablet}) {
    width: 150%;

    padding: 0px;
    font-size: 28px;
    text-align: left;
  }
`;

export const SeparationLine = styled.span`
  width: 100%;

  height: 2px;
  border-radius: 5px;
  background-color: ${(prop) => prop.theme.colors.background.accent};
  @media screen and (${(prop) => prop.theme.device.tablet}) {
    display: none;
  }
`;

export const DescriptionIntroduction = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: ${(prop) => prop.theme.colors.text.secondary};
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;

  object-fit: cover;
`;
