function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const currentColorName = document.querySelector('span.color');
const changeColorBtn = document.querySelector('button.change-color');

changeColorBtn.addEventListener("click", changeHexColor);

function changeHexColor() { 
  const randomColor = getRandomHexColor();
  currentColorName.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
}