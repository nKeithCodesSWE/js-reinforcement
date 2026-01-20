// 1. Declare state
let currentState = "idle";

// 2. Select the elements
const box = document.getElementById('statusBox');

const idleBtn = document.getElementById('idleBtn');
const activeBtn = document.getElementById('activeBtn');
const errorBtn = document.getElementById('errorBtn');

// 3. Function to update UI
function updateUI() {
    // remove all state classes
    box.classList.remove('idle', 'active', 'error')

    // add the current one
    box.classList.add(currentState);

    // update text
    box.textContent = currentState.toUpperCase();
}

// 4. Connect buttons to state
idleBtn.addEventListener('click', () => {
    currentState = "idle";
    updateUI();
});

activeBtn.addEventListener('click', () => {
    currentState = "active";
    updateUI();
});

errorBtn.addEventListener('click', () => {
    currentState = "error";
    updateUI();
})

// Error Message
if (currentState === 'error') {
    console.log('Something went wrong');
}