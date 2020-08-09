import './styles.css';
import debounce from 'lodash.debounce';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

const textRef = document.querySelector('.text');
const h1 = document.querySelector('h1');
const inputRef = document.querySelector('input');

const createList = data =>
  data.map(elem => {
    const name = document.createElement('p');
    name.textContent = elem.name;
    return name;
  });

const createCountryDescription = data =>
  data.map(elem => {
    const card = document.createElement('div');
    const country = document.createElement('div');
    country.textContent = elem.name;
    const capital = document.createElement('p');
    capital.textContent = `capital: ${elem.capital}`;
    const population = document.createElement('p');
    population.textContent = `population: ${elem.population}`;
    const flag = document.createElement('img');
    flag.classList.add('flag');
    flag.src = elem.flag;
    const languages = document.createElement('ul');
    languages.textContent = `languages:`;
    languages.append(
      ...elem.languages.map(element => {
        const list = document.createElement('li');
        list.textContent = element.name;
        return list;
      }),
    );
    card.append(flag, country, capital, population, languages);
    return card;
  });

inputRef.addEventListener('input', debounce(onInput, 500));

function clear() {
  textRef.textContent = '';
}

function onInput(event) {
  fetch(`https://restcountries.eu/rest/v2/name/${event.target.value}`).then(
    response =>
      response.json().then(data => {
        if (data.length > 10) {
          alert(
            'Слишком много совпадений! Необходимо сделать запрос более специфичным',
          );
        }
        if (data.length > 1 && data.length <= 10) {
          textRef.append(...createList(data));
        }
        if (data.length === 1) {
          textRef.append(...createCountryDescription(data));
        }
      }),
  );
  clear();
}
