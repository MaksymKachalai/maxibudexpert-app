import styled from 'styled-components';


export const ContactPhoneContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: ${(prop) => prop.theme.space[2]}px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  color: ${(prop) => prop.theme.colors.text.secondary};

  &:hover {
    background-color: ${(prop) => prop.theme.colors.background.accent};
    color: ${(prop) => prop.theme.colors.text.white};
  }
`;
