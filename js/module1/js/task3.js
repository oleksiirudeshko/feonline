const ADMIN_PASSWORD = 'jqueryismyjam';
const message1 = 'Отменено пользователем!';
const message2 = 'Добро пожаловать!';
const message3 = 'Доступ запрещен, неверный пароль!';

const password = prompt('Please enter password');
console.log(password);

switch (password) {
  case null:
    console.log(message1);
    break;

  case ADMIN_PASSWORD:
    alert(message2);
    break;

  default:
    alert(message3);
}
