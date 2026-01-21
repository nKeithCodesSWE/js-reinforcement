// 1. State
let text = "";

// 2. Select Elements
const input = document.getElementById('userInput'); 
const output = document.getElementById('output');
const form = document.getElementById('textForm');

// 3. Functions for event
function render() {
    output.textContent = text;
}

function formValid(event) {
    event.preventDefault();

    const value = input.value;

    if (value.trim() === "") {
        return
    }

    text = value.trim();
    render();
    input.value = "";
};

// 3. Event
form.addEventListener('submit', formValid);