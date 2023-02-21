const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) { 
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    } 
        
    const userCredentials = {
        email: email.value,
        password: password.value
    };

    console.log(userCredentials);

    event.currentTarget.reset();    
}