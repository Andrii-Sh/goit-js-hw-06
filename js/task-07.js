const sizeControllerEl = document.querySelector('#font-size-control');
const textFieldEl = document.querySelector('#text');

textFieldEl.style.fontSize = `${sizeControllerEl.value}px`;

const changeFontSizeInput = sizeControllerEl.addEventListener("input", (event) => { 
    const currentValue = event.currentTarget.value;    

    textFieldEl.style.fontSize = `${currentValue}px`;
});