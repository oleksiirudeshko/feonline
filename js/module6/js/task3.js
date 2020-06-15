import users from '../js/users.js'; // eslint-disable-line
// eslint-disable-next-line no-shadow
const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male'));
