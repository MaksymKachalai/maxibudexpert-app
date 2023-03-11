'use strict';

import { isValidPhone } from 'phone-validation';

const form = document.getElementById('hero-form');
const input = document.getElementById('form-input');

form.addEventListener('submit', event => {
  event.preventDefault();
  const { value } = event.target.phone;
  const isValidNumber = isValidPhone(value);
  if (!isValidNumber) {
  }
});
