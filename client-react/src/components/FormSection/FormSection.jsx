import React from 'react';
import * as SC from './FormSection.styled';
import { useForm } from '../../hooks/UseForm/UseForm';
import { FcBusinessman, FcPhoneAndroid, FcOk, FcHighPriority } from 'react-icons/fc';
import { MainButton } from '../Common/MainButton/MainButton';

export const FormSection = () => {
  const { handleInputChange, handleSubmit, fields, errors } = useForm();

  return (
    <SC.FormSection>
      <SC.Title>Залиште Заявку</SC.Title>
      <SC.Form onSubmit={handleSubmit}>
        <SC.FormGroup>
          <SC.InputLabel htmlFor="input-name">Імя</SC.InputLabel>
          <SC.InputContainer>
            <SC.FormDecorationIcon>
              <FcBusinessman size={35} />
            </SC.FormDecorationIcon>
            <SC.FormInput
              onChange={handleInputChange}
              type="text"
              placeholder="Введіть ім'я"
              name="name"
              value={fields.name}
              id="input-name"
              error={errors.nameError}
            />

            {errors.nameError ? (
              <>
                <SC.FormInfoInput>
                  <FcHighPriority size={25} />
                </SC.FormInfoInput>
                <SC.ErrorMessage>{errors.nameError}</SC.ErrorMessage>
              </>
            ) : (
              <SC.FormInfoInput>
                <FcOk size={25} />
              </SC.FormInfoInput>
            )}
          </SC.InputContainer>
        </SC.FormGroup>
        <SC.FormGroup>
          <SC.InputLabel htmlFor="input-phone">Номер телефону</SC.InputLabel>
          <SC.InputContainer>
            <SC.FormDecorationIcon>
              <FcPhoneAndroid size={35} />
            </SC.FormDecorationIcon>
            <SC.FormInput
              onChange={handleInputChange}
              type="tel"
              placeholder="Введіть номер телефону"
              name="phone"
              value={fields.phone}
              id="input-phone"
              error={errors.phoneError}
            />
            {errors.phoneError ? (
              <>
                <SC.FormInfoInput>
                  <FcHighPriority size={25} />
                </SC.FormInfoInput>
                <SC.ErrorMessage>{errors.phoneError}</SC.ErrorMessage>
              </>
            ) : (
              <SC.FormInfoInput>
                <FcOk size={25} />
              </SC.FormInfoInput>
            )}
          </SC.InputContainer>
        </SC.FormGroup>
        <MainButton type="submit">Замовити дзвінок</MainButton>
      </SC.Form>
    </SC.FormSection>
  );
};
