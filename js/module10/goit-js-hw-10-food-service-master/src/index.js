import './styles.css';

//for change theme
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
body.classList.add = Theme.LIGHT;
const input = document.querySelector('input.js-switch-input');
console.log(input);
input.addEventListener('change', event => {
  if (event.target.checked === true) {
    body.classList = Theme.DARK;
    localStorage.setItem('current-theme', Theme.DARK);
  } else {
    body.classList = Theme.LIGHT;
    localStorage.setItem('current-theme', Theme.LIGHT);
  }
});
const savedTheme = localStorage.getItem('current-theme');
if (savedTheme) {
  body.classList = savedTheme;
}
if (savedTheme === 'dark-theme') {
  input.checked = 'checked';
  console.log('ok');
}

const menuItems = document.querySelector('.js-menu');

import itemsTemplate from './tamplates/menu-items.hbs';
import menu from './menu.json'; // eslint-disable-line
const markup = itemsTemplate(menu);
menuItems.insertAdjacentHTML('afterbegin', markup);
