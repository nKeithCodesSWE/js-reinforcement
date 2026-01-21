// Gather Elements
const status = document.getElementById('status');
const onBtn = document.getElementById('on');
const offBtn = document.getElementById('off');

// State (single source of truth)
let isOn = true;

// Render UI (update)
function render() {
    // check current state
    if (isOn === true) {
        status.textContent = "Status: On";
    } else if (isOn === false) {
        status.textContent = "Status: Off";
    }
    // adjust ui to current state
}

// Event Listeners
onBtn.addEventListener('click', () => {
    isOn = true;
    render();
});

offBtn.addEventListener('click', () => {
    isOn = false;
    render();
});