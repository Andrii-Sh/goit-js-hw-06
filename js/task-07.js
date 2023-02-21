const sizeController = document.querySelector('#font-size-control');
const textField = document.querySelector('#text');

const changeFontSizeInput = sizeController.addEventListener("input", (event) => { 
    const currentValue = event.currentTarget.value;    

    textField.style.fontSize = `${currentValue}px`;
});