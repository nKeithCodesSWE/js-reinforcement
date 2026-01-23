// state
let state = {
    password: "",
    message: "",
    isValid: false
}

// ui elements
const form = document.getElementById("formInput");
const password = document.getElementById("passwordInput");
const messageEl = document.getElementById("message");

// submit event
form.addEventListener('submit', (event) => {
    // prevent default
    event.preventDefault();
    // raw input
    state.password = password.value;

    // Validation
    validatePassword();

    // render
    render();
});

// validation
function validatePassword() {
    if (state.password.length > 6 && state.password.length < 14) {
        state.isValid = true;
        state.message = "Strong Password!"
    } else {
        state.isValid = false;
        state.message = "Weak Password! Try Again!";
    }
}

// render
function render() {
    messageEl.textContent = state.message;
}