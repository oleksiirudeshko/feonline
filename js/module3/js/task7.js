/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const Transaction = {
  DEPOSIT: 'deposit', // {id ,     type,     amount}
  WITHDRAW: 'withdraw',
};
// const key = prompt('enter transaction type');
// console.log(Transaction[key.toUpperCase()]);
// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// eslint-disable-next-line no-unused-vars
const account = {
  balance: 0,

  //   // История транзакций
  transactions: [],

  //   /*
  //    * Метод создает и возвращает объект транзакции.
  //    * Принимает сумму и тип транзакции.
  //    */
  createTransaction(amount, type) {
    const getId = () => Math.floor(Math.random() * 1e4).toString(16);
    const id = getId;
    const trans = { id, amount, type };
    // eslint-disable-next-line no-undef
    transactions.push(trans);
    return trans;
  },

  //    * Принимает сумму танзакции.
  //    * Вызывает createTransaction для создания объекта транзакции
  //    * после чего добавляет его в историю транзакций

  deposit(amount) {
    // eslint-disable-next-line no-undef
    createTransaction(amount, (type = transition.DEPOSIT));
    // eslint-disable-next-line no-undef
    balance += amount;
    return this.transactions;
  },

  //    * Метод отвечающий за снятие суммы с баланса.
  //    * Принимает сумму танзакции.
  //    * Вызывает createTransaction для создания объекта транзакции
  //    * после чего добавляет его в историю транзакций.
  //    * Если amount больше чем текущий баланс, выводи сообщение
  //    * о том, что снятие такой суммы не возможно, недостаточно средств.

  withdraw(amount) {
    createTransaction(amount, (type = transition.WITHDRAW));

    if (amount > this.balance) {
      balance -= amount;
      console.log('недостаточно средств');
    }

    return this.transactions;
  },

  //    * Метод возвращает текущий баланс

  getBalance() {
    return this.balance;
  },

  //   /*
  //    * Метод ищет и возвращает объект транзации по id
  //    */
  // eslint-disable-next-line consistent-return
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        return transactions[i];
      }
    }
  },

  //   /*
  //    * Метод возвращает количество средств
  //    * определенного типа транзакции из всей истории транзакций
  //    */
  // eslint-disable-next-line consistent-return
  getTransactionTotal(type) {
    let total = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (transactions[i].type === type) {
        total += transactions[i].amount;
        // eslint-disable-next-line no-sequences
        return 'total', type, ':', total;
      }
    }
  },
};
