import users from '../js/users.js'; // eslint-disable-line

// eslint-disable-next-line no-shadow
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
