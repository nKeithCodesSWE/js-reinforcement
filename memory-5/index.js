// State an empty array to hold the list items (single source of truth)
let items = [];

// UI Elements
const input = document.getElementById('itemInput');
const addbtn = document.getElementById('addButton');
const listContainer = document.getElementById('list');

// Events
addbtn.addEventListener('click', () => {
    addItem();
    render();
});

// Function
function addItem() {
    const value = input.value.trim();

    if (value !== "") {
        items.push(value);
        input.value = "";
    }
}

// Render
function render() {
    listContainer.innerHTML = "";

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listContainer.append(li);
    })
}