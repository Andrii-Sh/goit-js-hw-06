function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('div#boxes');

createBtn.addEventListener("click", createBoxes);
inputNumber.addEventListener("change", () => { });
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() { 
  let murkup = [];

  let elWidth = 30;
  let elHeight = elWidth;

  for (let i = 0; i < inputNumber.value; i += 1) {
    const box = document.createElement("div");
    box.style.width = elWidth + "px";
    elWidth += 10;
    box.style.height = elHeight + "px";
    elHeight += 10;
    box.style.backgroundColor = getRandomHexColor();
    
    murkup.push(box); 
  }

  boxesContainer.append(...murkup);  
}

function destroyBoxes() { 
  boxesContainer.innerHTML = "";
}


