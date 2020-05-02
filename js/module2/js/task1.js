const logItems = function(array) {
  for (let i = 1; i < array.length; i += 1) {
    // eslint-disable-next-line prefer-template
    console.log(i + ' - ' + array[i]);
  }
};

let names = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
logItems(names);

names = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
logItems(names);

/*
/* Вызовы функции для проверки работоспособности твоей реализации.
 */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
//
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
