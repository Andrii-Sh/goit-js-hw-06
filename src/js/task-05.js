const form = document.querySelector('#name-input');
const message = document.querySelector('#name-output');

form.addEventListener("input", (event) =>
    event.currentTarget.value === ""
        ? message.textContent = "Anonymous"
        : message.textContent = event.currentTarget.value
    );