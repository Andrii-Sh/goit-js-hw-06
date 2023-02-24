function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberEl = document.querySelector('input[type="number"]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesContainerEl = document.querySelector('div#boxes');

createBtnEl.addEventListener("click", onCreateBtnClick);
destroyBtnEl.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  createBoxes();
}

function onDestroyBtnClick() {
  destroyBoxes();
}

function createBoxes() { 
  let murkup = [];

  let sizes = 30;

  for (let i = 0; i < inputNumberEl.value; i += 1) {
    const box = document.createElement("div");
    box.style.width = sizes + "px";
    box.style.height = sizes + "px";
    sizes += 10;
    box.style.backgroundColor = getRandomHexColor();
    
    murkup.push(box); 
  }

  boxesContainerEl.append(...murkup);  
}

function destroyBoxes() { 
  boxesContainerEl.innerHTML = "";
}


