import users from '../js/users.js'; // eslint-disable-line

// eslint-disable-next-line no-shadow
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users, 'blue'));
