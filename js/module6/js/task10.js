import users from '../js/users.js'; // eslint-disable-line

// eslint-disable-next-line no-shadow
const getSortedUniqueSkills = users => {
  const allSkills = users.reduce(function(skills, user) {
    skills.push(...user.skills);
    return skills;
  }, []);
  return allSkills
    .sort()
    .filter((item, index, arr) => index === arr.indexOf(item));
};

console.log(getSortedUniqueSkills(users));
