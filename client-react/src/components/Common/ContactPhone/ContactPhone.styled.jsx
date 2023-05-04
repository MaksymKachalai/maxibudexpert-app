import styled from 'styled-components';

export const ContactPhoneLink = styled.a`
  font-weight: 600;
  color: ${(prop) => prop.theme.colors.text.secondary};
`;

export const ContactPhoneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: ${(prop) => prop.theme.space[2]}px;
  border-radius: 5px;

  &:hover {
    background-color: ${(prop) => prop.theme.colors.background.accent};
    ${ContactPhoneLink} {
      color: ${(prop) => prop.theme.colors.text.white};
    }
  }
`;
