// 1. State
let status = true;

// 2. Grab Elements
const textArea = document.getElementById('status');
const toggleBtn = document.getElementById('toggle');

// 3. Render
function updateUI() {
    // if / else
    if (status === true) {
        textArea.textContent = 'ONLINE';
    } else {
        textArea.textContent = 'OFFLINE';
    }
}

// 4. Event
toggleBtn.addEventListener('click', () => {
    // when clicked, toggle between two states, online and offline
    status = status ? false : true ;
    updateUI();
});