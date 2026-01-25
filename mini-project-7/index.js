// State
let state = {
    todos: []
}

// UI Elements
const input = document.getElementById('todoInput');
const addBtn = document.getElementById('add-todo');
const outputEl = document.getElementById('output-area');

// Events/function


addBtn.addEventListener('click', () => {
    let value = input.value.trim();
    if (value === "") return;

    state.todos.push(value);
    input.value = '';
    renderUI();
});

// Render
function renderUI() {
    outputEl.innerHTML = '';

    state.todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '✗';
        removeBtn.addEventListener('click', () => {
            state.todos.splice(index, 1);
            renderUI();
        })

        li.appendChild(removeBtn);
        outputEl.appendChild(li);
    });
}   