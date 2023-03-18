'use strict';

const body = document.querySelector('body');
const modal = document.getElementById('modal');
const modalButtonOpen = document.getElementById('modal-button');
const modalButtonClose = document.getElementById('modal-button-close');
const navigationItem = document.querySelectorAll('.navigation__item');

modalButtonOpen.addEventListener('click', event => {
  modal.classList.add('modal--open');
  body.style.overflow = 'hidden';
});

modalButtonClose.addEventListener('click', event => {
  modal.classList.remove('modal--open');
  body.style.overflow = 'auto';
});

navigationItem.forEach(item => {
  item.addEventListener('click', event => {
    modal.classList.remove('modal--open');
    body.style.overflow = 'auto';
  });
});
