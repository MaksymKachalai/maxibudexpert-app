'use strict';

import { Notify, Report } from 'notiflix';
import { isValidEmail, isValidPhone } from './validation';

const form = document.getElementById('hero-form');
const input = document.getElementById('form-input');

form.addEventListener('submit', event => {
  event.preventDefault();
  const { value } = event.target.phone;
  const { result } = isValidPhone(value);
  if (!result) {
    input.setCustomValidity('error');
    Notify.failure('Неправильний формат номеру');
    setTimeout(() => {
      input.setCustomValidity('');
    }, 1000);
  }
  if (result) {
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
