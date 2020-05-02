// eslint-disable-next-line consistent-return
const formatString = function(string) {
  const strLength = string.length;
  if (strLength < 40) {
    return string;
  }
  // eslint-disable-next-line no-unused-vars
  const stack = ['...'];
  if (strLength > 40) {
    const stringCharacters = string.split('');
    stringCharacters.splice(41);
    stringCharacters.push('...');
    // console.log(stringCharacters);
    return stringCharacters.join('');
  }
};

/* * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
