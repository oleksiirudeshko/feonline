import users from '../js/users.js'; // eslint-disable-line

// eslint-disable-next-line no-shadow
const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users));
