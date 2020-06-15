import users from '../js/users.js'; // eslint-disable-line

// eslint-disable-next-line no-shadow
const getNamesSortedByFriendsCount = users => {
  const usersSorted = (a, b) => a.friends.length - b.friends.length;

  return users.sort(usersSorted).map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
