/* eslint-disable operator-assignment */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
import galleryItem from '..js/gallery-items.js'; // eslint-disable-line

let __index;
let counterValue = 0;

const galleryItems = galleryItem.map(function(elem, index) {
  elem.dataIndex = index + 1;
  return elem;
});

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const img = document.querySelector('.lightbox__image');
const backDrop = document.querySelector('.lightbox__content');

const createGallery = galleryItems.map(elem => {
  const list = document.createElement('li');
  list.classList.add('gallery__item');
  const url = document.createElement('a');
  url.classList.add('gallery__link');
  url.href = elem.original;
  url.dataset.index = elem.dataIndex;
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = elem.preview;
  img.dataset.source = elem.original;
  img.dataset.index = elem.dataIndex;
  img.alt = elem.description;
  list.append(url);
  url.append(img);
  return list;
});

gallery.append(...createGallery);

gallery.addEventListener('click', onTagsClick);

function onTagsClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  __index = event.target.dataset.index;
  lightbox.classList.add('is-open');
  img.src = event.target.dataset.source;
  window.addEventListener('keydown', onPressKeydown);
}

closeBtn.addEventListener('click', closeModal);
backDrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
});

const url = function(nextUrl) {
  img.src = findNextItemHref(
    galleryItems,
    nextUrl + Number(event.target.dataset.index),
  );
};
const findNextItemHref = function(arr, index) {
  __index = index - 1;
  for (let i = 0; i < arr.length; i += 1)
    if (arr[i].dataIndex === index) {
      return arr[i].original;
    }
};

function onPressKeydown(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
  if (event.code === 'ArrowRight') {
    if (__index < galleryItems.length - 1) {
      counterValue = counterValue + 1;
      return url(counterValue);
    }
  }
  if (event.code === 'ArrowLeft') {
    if (__index > 0) {
      counterValue = counterValue - 1;
      return url(counterValue);
    }
  }
}
// eslint-disable-next-line no-unused-vars
function closeModal(event) {
  lightbox.classList.remove('is-open');
  img.src = '';
  window.removeEventListener('keydown', onPressKeydown);
}
