const formEl = document.querySelector('#name-input');
const messageEl = document.querySelector('#name-output');

formEl.addEventListener("input", (event) =>
    event.currentTarget.value.trim() === ""
        ? messageEl.textContent = "Anonymous"
        : messageEl.textContent = event.currentTarget.value
    );