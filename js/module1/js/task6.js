let value = 0;
let total = 0;

while (value != null) {
  value = prompt('введите число');
  if (value != null) {
    // eslint-disable-next-line radix
    value = parseInt(value);
    if (Number.isNaN(value)) {
      alert('Было введено не число, попробуйте еще раз');
    } else total += value;
    console.log(value);
  } else {
    alert(`Общая сумма чисел равна ${total}`);
  }
}
