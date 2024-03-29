import styled, { keyframes } from 'styled-components';
import { SectionContainer } from '../../style/globalStyles';

export const FormSectionContainer = styled(SectionContainer)`
  background-color: ${(prop) => prop.theme.colors.background.secondary};
`;

export const Title = styled.h2`
  margin-bottom: ${(prop) => prop.theme.space[5]}px;

  color: ${(prop) => prop.theme.colors.text.secondary};

  @media screen and (${(prop) => prop.theme.device.tablet}) {
    font-size: ${(prop) => prop.theme.fontSizes[5]}px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 35px;
  width: 100%;
  max-width: 550px;
`;

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

  text-align: center;

  color: ${(prop) => prop.theme.colors.text.secondary};

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

const spinerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid white;
  border-radius: 50%;
  border-left-color: transparent;
  width: 22px;
  height: 22px;
  animation: ${spinerAnimation} 1s linear infinite;
`;
