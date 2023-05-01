import styled from 'styled-components';

export const Services = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: ${(prop) => prop.theme.space[3]}px;
  padding-left: ${(prop) => prop.theme.space[3]}px;
  padding-top: ${(prop) => prop.theme.space[4]}px;
  padding-bottom: ${(prop) => prop.theme.space[4]}px;
`;

export const ServicesTitle = styled.h2`
  margin-bottom: ${(prop) => prop.theme.space[3]}px;

  color: ${(prop) => prop.theme.colors.text.accent};

  text-align: center;
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
`;

export const ServicesItem = styled.li`
  position: relative;

  width: 100%;
  height: 300px;

  border-radius: 5px;
  background-image: url(${(prop) => prop.background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ServicesCardTitle = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  padding-top: ${(prop) => prop.theme.space[2]}px;
  padding-bottom: ${(prop) => prop.theme.space[2]}px;

  border-radius: 5px;

  background-color: ${(prop) => prop.theme.colors.background.white};

  font-size: ${(prop) => prop.theme.fontSizes[3]}px;
  color: ${(prop) => prop.theme.colors.text.secondary};

  text-align: center;
`;

export const CardButton = styled.button`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);

  padding: ${(prop) => prop.theme.space[2]}px;
  border-radius: 5px;

  background-color: ${(prop) => prop.theme.colors.background.accent};
  font-size: ${(prop) => prop.theme.fontSizes[1]}px;
  white-space: nowrap;
  color: white;
`;
