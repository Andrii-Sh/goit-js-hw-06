const form = document.querySelector('#name-input');
const message = document.querySelector('#name-output');

form.addEventListener("input", (event) =>
    event.currentTarget.value.trim() === ""
        ? message.textContent = "Anonymous"
        : message.textContent = event.currentTarget.value
    );