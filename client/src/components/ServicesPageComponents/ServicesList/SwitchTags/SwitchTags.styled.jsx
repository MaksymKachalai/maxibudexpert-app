import styled from 'styled-components';

export const SwitchButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SwitchButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: ${(prop) => {
    if (prop.isActive) {
      return prop.theme.colors.background.accent;
    }
    return prop.theme.colors.background.secondary;
  }};

  color: ${(prop) => {
    if (prop.isActive) {
      return prop.theme.colors.text.white;
    }
    return prop.theme.colors.text.secondary;
  }};

  font-weight: 500;
`;
