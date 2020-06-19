const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulIngredients = document.querySelector('#ingredients');
ulIngredients.append(
  ...ingredients.map(elem => {
    const list = document.createElement('li');
    list.textContent = elem;
    return list;
  }),
);
