import * as SC from './FormSection.styled';
import { useForm } from 'hooks/UseForm/UseForm';
import { FcBusinessman, FcPhoneAndroid } from 'react-icons/fc';
import { MainButton } from 'components/Common/MainButton/MainButton';
import { MainInput } from 'components/Common/MainInput/MainInput';

export const FormSection = () => {
  const { handleInputChange, handleSubmit, fields, errors, isFetching } = useForm();

  return (
    <SC.FormSectionContainer id="form-section">
      <SC.Title>Залиште Заявку</SC.Title>
      <SC.Form onSubmit={handleSubmit}>
        <MainInput
          onChange={handleInputChange}
          type="text"
          placeholder="Введіть ім'я"
          name="name"
          value={fields.name}
          id="input-name"
          error={errors.nameError}
          htmlFor="input-name"
          labelText="Імя"
        >
          <FcBusinessman size={35} />
        </MainInput>
        <MainInput
          onChange={handleInputChange}
          type="tel"
          placeholder="Введіть номер телефону"
          name="phone"
          value={fields.phone}
          id="input-phone"
          error={errors.phoneError}
          htmlFor="input-phone"
          labelText="Номер телефону"
        >
          <FcPhoneAndroid size={35} />
        </MainInput>

        <MainButton type="submit">{isFetching ? <SC.Spinner /> : 'Замовити дзвінок'}</MainButton>
      </SC.Form>
    </SC.FormSectionContainer>
  );
};
