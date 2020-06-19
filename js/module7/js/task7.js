const sizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

sizeControlRef.addEventListener('input', event => {
  textRef.style.fontSize = `${event.target.value}px`;
});
