// 1. State
let text = "";

// 2. Gather Elements
const input = document.getElementById("userInput");
const output = document.getElementById("output");
const form = document.getElementById("textForm");

// 3. Render Function
function render() {
    output.textContent = text;
}

// 4. Event Function
function handleSubmit(event) {
    event.preventDefault(); // stop the page from refreshing

    // get raw input
    let value = input.value;

    // stop if input is empty ot only spaces
    if (value.trim() === "") {
        return
    }

    // update global state
    text = value.trim();
    // reflect new state in ui
    render();
    // optional: clear input after submit
    input.value = '';
}

form.addEventListener('submit', handleSubmit);