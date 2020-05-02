const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const addLogin = function(allLogins, login) {
  // eslint-disable-next-line no-use-before-define
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    return 'логин успешно добавлен';
  }
  return 'логин NE добавлен';
};

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) return true;

  console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  return false;
};

// eslint-disable-next-line consistent-return
const isLoginUnique = function(allLogins, login) {
  for (let i = 0; i < allLogins.length; i += 1) {
    if (allLogins.includes(login)) {
      console.log('Такой логин уже используется!');
      return false;
    }
    return true;
  }
};

//  Вызовы функции для проверки работоспособности твоей реализации.

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
