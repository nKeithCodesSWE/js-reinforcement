// State
let state = {
    lists: []
}

// UI Elements
const listsContainer = document.getElementById('list');
const button = document.getElementById('addBtn');
const input = document.getElementById('itemInput');

// Events
button.addEventListener('click', () => {
    addItem();
    render();
})

// Functions
function addItem() {
    const value = input.value.trim();
    if (value !== "") {
        state.lists.push(value);
        input.value = "";
    }
}

// Render
function render() {
    listsContainer.innerHTML = "";

    state.lists.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listsContainer.append(li);
    });

}