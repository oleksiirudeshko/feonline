// eslint-disable-next-line no-unused-vars
const message = 0;
// eslint-disable-next-line no-unused-vars
let pricePerWord;
// eslint-disable-next-line no-shadow
const calculateEngravingPrice = function(message, pricePerWord) {
  const wordsSumm = message.split(' ');
  return wordsSumm.length * pricePerWord;
};

/*
 Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);
// 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);
// 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);
// 120
