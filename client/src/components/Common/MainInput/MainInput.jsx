import * as SC from './MainInput.styled';
import { FcOk, FcHighPriority } from 'react-icons/fc';

export const MainInput = ({
  htmlFor,
  onChange,
  type = 'text',
  placeholder = 'add placeholder prop',
  name,
  value,
  id,
  error,
  labelText = 'add labelText prop',
  children,
}) => {
  return (
    <SC.FormGroup>
      <SC.InputLabel htmlFor={htmlFor}>{labelText}</SC.InputLabel>
      <SC.InputContainer>
        <SC.FormDecorationIcon>{children}</SC.FormDecorationIcon>
        <SC.FormInput
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          id={id}
          error={error}
        />

        {error ? (
          <>
            <SC.FormInfoInput>
              <FcHighPriority size={25} />
            </SC.FormInfoInput>
            <SC.ErrorMessage>{error}</SC.ErrorMessage>
          </>
        ) : (
          <SC.FormInfoInput>
            <FcOk size={25} />
          </SC.FormInfoInput>
        )}
      </SC.InputContainer>
    </SC.FormGroup>
  );
};
