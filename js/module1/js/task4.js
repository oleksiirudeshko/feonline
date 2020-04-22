const credits = 23500;

const message1 = 'Отменено пользователем!';
const message2 = 'Недостаточно средств на счету!';

const pricePerDroid = 3000;
let totalPrice;

const value = prompt('количество дроидов, которые вы хотите купить');
console.log(value);

switch (value) {
  case null:
    console.log(message1);
    break;

  default:
    totalPrice = value * pricePerDroid;
    console.log(totalPrice);
    break;
}

switch (totalPrice) {
  case totalPrice:
    if (totalPrice > credits) {
      console.log(message2);
      break;
    }
  // eslint-disable-next-line no-fallthrough
  default:
    if (totalPrice <= credits) {
      console.log(
        'Вы купили',
        value,
        'дроидов, на счету осталось',
        credits - totalPrice,
        'кредитов..',
      );
    }
}
