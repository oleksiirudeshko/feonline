const message1 = 'Отменено пользователем!';
const message2 = 'В вашей стране доставка не доступна';

let country = prompt('your country');
console.log(country);

let price;
country = country.toLowerCase();

if (country === 'китай') {
  price = 100;
} else if (country === 'чили') {
  price = 250;
} else if (country === 'австралия') {
  price = 170;
} else if (country === 'индия') {
  price = 80;
} else if (country === 'ямайка') {
  price = 120;
} else {
  alert(message2);
}

console.log(price);

switch (country) {
  case null:
    console.log(message1);
    break;

  default:
    console.log(
      'Доставка в',
      country.toUpperCase(),
      'будет стоить',
      price,
      'кредитов',
    );
    break;
}
