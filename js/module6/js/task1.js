import users from '../js/users.js'; // eslint-disable-line

// eslint-disable-next-line no-shadow
const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));
