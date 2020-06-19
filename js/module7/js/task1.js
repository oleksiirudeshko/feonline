const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории`);
itemsRef.forEach(elem => {
  const title = elem.querySelector('h2').textContent;
  const items = elem.querySelector('ul').children.length;
  console.log(`- Категория: ${title}`);
  console.log(`- Количество элементов: ${items}`);
});
