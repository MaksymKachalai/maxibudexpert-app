import styled from 'styled-components';

export const AboutUs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-right: ${(prop) => prop.theme.space[3]}px;
  padding-left: ${(prop) => prop.theme.space[3]}px;
  padding-top: ${(prop) => prop.theme.space[4]}px;
  padding-bottom: ${(prop) => prop.theme.space[4]}px;
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
