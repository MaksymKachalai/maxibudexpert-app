import styled, { keyframes } from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 10px;
  width: 100%;
`;

export const InputLabel = styled.label`
  display: none;
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const FormDecorationIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
  border-right: 2px solid ${(prop) => prop.theme.colors.secondary};
`;

export const FormInput = styled.input`
  width: 100%;
  height: 60px;

  padding: 5px 40px;

  border-radius: 5px;
  border: none;
  outline: none;

  text-align: center;

  color: ${(prop) => prop.theme.colors.text.secondary};

  outline: ${(prop) => {
    if (prop.error) {
      return `2px solid ${prop.theme.colors.error}`;
    }
  }};

  &:focus {
    outline: 2px solid ${(prop) => prop.theme.colors.accent};
  }

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    font-size: ${(prop) => prop.theme.fontSizes[3]}px;
  }
`;

const infoAnimation = keyframes`
  0%{
opacity: 0;
  }
100%{
  opacity: 1;
}
`;

export const FormInfoInput = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  animation: ${infoAnimation} 500 forwards ease-in-out;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  right: 0;
  top: -30px;

  color: ${(prop) => prop.theme.colors.error};
`;