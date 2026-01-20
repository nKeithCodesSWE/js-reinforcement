// 1. State
let count = 0;

// 2. Gather Elements
const countEl = document.getElementById('count');
const incBtn = document.getElementById('increment');
const decBtn = document.getElementById('decrement');

// 3. Render UI
function renderUI() {
    countEl.textContent = count;
} 

// 4. Events for buttons
incBtn.addEventListener('click', () => {
    count = count + 1;
    renderUI();
    console.log('Count: ' + count);
});

decBtn.addEventListener('click', () => {
    if (count === 0) {
        return;
    } else {
        count = count - 1;
        renderUI();
        console.log('Count: ' + count);
    }
});