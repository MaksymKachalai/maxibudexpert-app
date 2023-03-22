'use strict';

import { Notify, Report } from 'notiflix';
import { isValidPhone } from './validation';

const form = document.getElementById('hero-form');
const input = document.getElementById('form-input');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const { value } = event.target.phone;
  const { result } = isValidPhone(value);
  if (!result) {
    input.setCustomValidity('error');
    Notify.failure('Неправильний формат номеру');
    setTimeout(() => {
      input.setCustomValidity('');
    }, 1000);
    return;
  }
  const data = {
    phone: event.target.phone.value,
  };
  console.log(data);
  let response = await fetch('http://localhost:3001/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  let isFormSended = await response.json(response);

  console.log(isFormSended);

  if (isFormSended) {
    Report.success(
      'Заявку прийнято',
      "Ми зв'яжемося з Вами протягом 5 хвилин",
      'Чудово!',
      {
        fontFamily: 'Montserrat',
        titleFontSize: '20px',
        messageFontSize: '16px',
        buttonFontSize: '16px',
      }
    );
    input.value = '';
  }
});

const applicationForm = document.getElementById('application__form');
const applicationInputName = document.getElementById('application__input-name');
const applicationInputPhone = document.getElementById(
  'application__input-phone'
);

applicationForm.addEventListener('submit', async event => {
  event.preventDefault();
  const { phone, name } = event.target;
  const { result } = isValidPhone(phone.value);
  if (name.value === '') {
    applicationInputName.setCustomValidity('error');
    Notify.failure('Заповніть всі поля');
    setTimeout(() => {
      applicationInputName.setCustomValidity('');
    }, 1000);
    return;
  }

  if (!result) {
    applicationInputPhone.setCustomValidity('error');
    Notify.failure('Неправильний формат номеру');
    setTimeout(() => {
      applicationInputPhone.setCustomValidity('');
    }, 1000);
  }
  const data = {
    phone: event.target.phone.value,
    name: event.target.name.value,
  };
  const response = await fetch('http://localhost:3001/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const isFormSended = await response.json(response);
  console.log(isFormSended);

  if (isFormSended) {
    Report.success(
      'Заявку прийнято',
      "Ми зв'яжемося з Вами протягом 5 хвилин",
      'Чудово!',
      {
        fontFamily: 'Montserrat',
        titleFontSize: '20px',
        messageFontSize: '16px',
        buttonFontSize: '16px',
      }
    );
    applicationInputName.value = '';
    applicationInputPhone.value = '';
  }
});
