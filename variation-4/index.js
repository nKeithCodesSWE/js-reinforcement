// State
let state = {
    username: '',
    isValid: false,
    message: ''
}

// UI Elements
const form = document.getElementById('formInput');
const usernameInput = document.getElementById('username');
const messageEl = document.getElementById('output');

// Event Handlers
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const trimmed = usernameInput.value.trim();
    state.username = trimmed;

    validateName(trimmed);
    render();
});

// Validation Function
function validateName(name) {

    if (name.length >= 3 && !name.includes(" ")) {
        state.isValid = true;
        state.message = 'Valid username!';
    } else {
        state.isValid = false;
        state.message = 'Username must be at least 3 characters long and not contain spaces.';
    }
}

// Render Function
function render() {
    messageEl.textContent = state.message;

     if (state.isValid) {
        messageEl.classList.remove('hidden');
        messageEl.classList.remove('error');
    } else {
        messageEl.classList.remove('hidden');
        messageEl.classList.add('error');
    }
}