class Storage {
  constructor(Arr) {
    this.items = Arr;
  }

  getItems() {
    return this.items;
  }

  // eslint-disable-next-line
  addItem(itemName) {
    // eslint-disable-next-line
    storage.items.push(itemName);
  }

  removeItem(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);
