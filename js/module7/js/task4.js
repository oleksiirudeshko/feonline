const valueRef = document.querySelector('#value');
let counterValue = 0;

const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

const value = function(action) {
  valueRef.textContent = action;
};
decBtn.addEventListener('click', () => {
  // eslint-disable-next-line operator-assignment
  counterValue = counterValue - 1;
  return value(counterValue);
});
incBtn.addEventListener('click', () => {
  // eslint-disable-next-line operator-assignment
  counterValue = counterValue + 1;
  return value(counterValue);
});
