const total = 100;
let ordered;

const message1 = 'На складе недостаточно твоаров!';

const message2 = 'Заказ оформлен, с вами свяжется менеджер';

ordered = 50;

if (ordered <= total) {
  console.log(message2);
} else {
  console.log(message1);
}

ordered = 130;

if (ordered <= total) {
  console.log(message2);
} else {
  console.log(message1);
}
