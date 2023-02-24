function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const currentColorNameEl = document.querySelector('span.color');
const changeColorBtnEl = document.querySelector('button.change-color');

changeColorBtnEl.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick() {
  changeHexColor();
}

function changeHexColor() { 
  const randomColor = getRandomHexColor();
  currentColorNameEl.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}