const findLongestWord = function(string) {
  const stringWords = string.split(' ');
  let longestWord = stringWords[0];

  for (let i = 0; i < stringWords.length; i += 1) {
    if (stringWords[i].length > longestWord.length) {
      longestWord = stringWords[i];
    }
  }
  return longestWord;
};

// Вызовы функции для проверки работоспособности твоей реализации.

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
