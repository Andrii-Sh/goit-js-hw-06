const textInput = document.querySelector('#validation-input');

const REQUIRED_LENGTH = Number(textInput.getAttribute('data-length'));

textInput.addEventListener("blur", (event) => { 

    const inputValue = event.currentTarget.value.trim();

    textInput.classList.add("invalid");

    if (inputValue.length === REQUIRED_LENGTH) {
        textInput.classList.replace("invalid", "valid");        
    }
});

