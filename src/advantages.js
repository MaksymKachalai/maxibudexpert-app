'use strict';

const advantagesItem = document.querySelectorAll('.advantages__item');
const advantagesLabel = document.querySelectorAll('.advantages__label');

advantagesItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    console.log(item.children[3]);
    item.children[2].classList.add('advantages__label--active');
  });

  item.addEventListener('mouseout', () => {
    if (item.classList.contains('advantages__item--active')) return;
    item.children[2].classList.remove('advantages__label--active');
  });

  item.addEventListener('click', () => {
    item.classList.toggle('advantages__item--active');
    if (item.classList.contains('advantages__item--active')) {
      item.children[2].classList.add('advantages__label--active');
    } else {
      item.children[2].classList.remove('advantages__label--active');
    }
  });
});
