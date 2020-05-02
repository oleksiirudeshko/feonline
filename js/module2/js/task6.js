/* eslint-disable no-unreachable */
let input;
const numbers = [];
let total = 0;

const add = function() {
  do {
    input = prompt('введите число');

    if (input === null) {
      return 'отменено пользователем';
      // eslint-disable-next-line no-unreachable
      break;
    }

    input = Number(input);

    if (Number.isNaN(input)) {
      alert('Было введено не число, попробуйте еще раз');
      // eslint-disable-next-line no-continue
      continue;
    }
    numbers.push(input);
    console.log(numbers);
    // eslint-disable-next-line no-constant-condition
  } while (true);

  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
};

console.log(add());
