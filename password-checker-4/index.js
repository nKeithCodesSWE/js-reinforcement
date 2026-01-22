// State (single source of truth)
let state = {
    password: "",
    isValid: false,
    message: ""
};

// UI Elements
const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const messageEL = document.getElementById('message');

// Submit event form
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page from refreshing

    // Step A: Read raw input
    state.password = passwordInput.value;

    // Step B: Validate Input
    if (state.password.length > 6 && state.password.length < 14) {
        state.isValid = true;
        state.message = "✅ Password is valid!";
    } else {
        state.isValid = false;
        state.message = "❌ Password must be 7-13 characters";
    }

    // Step C: render UI
    render();
});

function render() {
    messageEL.textContent = state.message;
}