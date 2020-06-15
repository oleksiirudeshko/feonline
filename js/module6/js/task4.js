import users from '../js/users.js'; // eslint-disable-line

// eslint-disable-next-line no-shadow
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users));
