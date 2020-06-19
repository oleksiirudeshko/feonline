/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
const renBtn = document.querySelector('button[data-action="render"]');
const desBtn = document.querySelector('button[data-action="destroy"]');
const input = document.querySelector('#controls input');
const outputRef = document.querySelector('#boxes');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

input.addEventListener('change', event => {
  const newValue = event.target.value;
  return createBoxes(newValue);
});

const createBoxes = function(amount) {
  const repeatStr = function(str, amount) {
    let new_str = '';
    while (amount-- > 0) new_str += str;
    return new_str;
  };

  outputRef.insertAdjacentHTML(
    'afterbegin',
    repeatStr('<div class="box"></div>', amount),
  );
  renBtn.addEventListener('click', () => {
    outputRef.style.display = 'flex';
    const box = document.querySelectorAll('.box');
    let size = 30;
    box.forEach(elem => {
      // eslint-disable-next-line operator-assignment
      size = size + 10;
      elem.style.width = `${size}px`;
      elem.style.height = `${size}px`;
      elem.style.background = `rgb(
            ${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(
        0,
        255,
      )},${getRandomIntInclusive(0, 255)}`;
    });
  });
};

desBtn.addEventListener('click', () => {
  outputRef.textContent = '';
});
