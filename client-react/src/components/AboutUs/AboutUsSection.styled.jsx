import styled from 'styled-components';

export const AboutUs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-right: ${(prop) => prop.theme.space[3]}px;
  padding-left: ${(prop) => prop.theme.space[3]}px;
  padding-top: ${(prop) => prop.theme.space[4]}px;
  padding-bottom: ${(prop) => prop.theme.space[4]}px;

  background-color: ${(prop) => prop.theme.colors.background.secondary};
`;

export const AboutUsTitle = styled.h2`
  display: none;
`;

export const AboutUsSubtitle = styled.p`
  margin-bottom: ${(prop) => prop.theme.space[2]}px;

  text-align: center;

  font-size: ${(prop) => prop.theme.fontSizes[4]}px;
  font-weight: ${(prop) => prop.theme.fontWeights.heading};
  color: ${(prop) => prop.theme.colors.text.secondary};
`;
export const AboutUsSubtitleAccent = styled(AboutUsSubtitle)`
  font-size: ${(prop) => prop.theme.fontSizes[5]}px;
  color: ${(prop) => prop.theme.colors.text.accent};
`;

export const TitleLine = styled.span`
  display: inline-block;
  width: 60px;
  height: 3px;

  margin-bottom: ${(prop) => prop.theme.space[4]}px;
  border-radius: 25px;
  background-color: ${(prop) => prop.theme.colors.background.accent};
`;

export const AboutUsDescription = styled.p`
  margin-bottom: 70px;

  text-align: center;
  color: ${(prop) => prop.theme.colors.text.secondary};
`;

export const AboutUsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;
`;

export const AboutUsItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  max-width: 350px;
  height: 250px;

  background-color: ${(prop) => prop.theme.colors.background.white};

  border-radius: 5px;

  -webkit-box-shadow: 0px 0px 18px -8px rgba(20, 20, 20, 1);
  -moz-box-shadow: 0px 0px 18px -8px rgba(20, 20, 20, 1);
  box-shadow: 0px 0px 18px -8px rgba(20, 20, 20, 1);
`;

export const ItemTitle = styled.p`
  position: absolute;
  bottom: 15%;

  width: 100%;

  text-align: center;
  font-size: ${(prop) => prop.theme.fontSizes[2]}px;
  font-weight: 500;
  color: ${(prop) => prop.theme.colors.text.secondary};
`;

export const ItemNumber = styled.p`
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);

  width: 70px;
  height: 70px;

  text-align: center;
  line-height: 70px;

  font-weight: ${(prop) => prop.theme.fontWeights.heading};

  font-size: ${(prop) => prop.theme.fontSizes[5]}px;
  color: ${(prop) => prop.theme.colors.text.accent};
`;

export const ItemIcon = styled.div`
  position: absolute;
  top: 10%;
`;