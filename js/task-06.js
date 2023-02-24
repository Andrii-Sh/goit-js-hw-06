const textInputEl = document.querySelector('#validation-input');

const REQUIRED_LENGTH = Number(textInputEl.getAttribute('data-length'));

textInputEl.addEventListener("blur", handleCheckInput)

function handleCheckInput(event) {
    const inputValue = event.currentTarget.value.trim();

    textInputEl.classList.add("invalid");

    if (inputValue.length === REQUIRED_LENGTH) {
        textInputEl.classList.replace("invalid", "valid");        
    }
}
