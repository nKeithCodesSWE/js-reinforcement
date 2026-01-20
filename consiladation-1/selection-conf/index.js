// 1. Select Dom Elements
const status = document.querySelector('#status');
const button = document.querySelector('#activate');

// 2. Functions for Dom
function statusChange() {
    const isIdle = status.textContent === 'Status: Idle';

    status.textContent = isIdle ? 'Status: Active' : 'Status: Idle';
    status.classList.toggle('active', isIdle);
};


// 3. Events on click
button.addEventListener('click', statusChange);