// state
let state = {
    lists: []
}

// references to DOM elements
const inputList = document.getElementById('inputList');
const addBtn = document.getElementById('processButton');
const listOutput = document.getElementById('output');

// event listeners
addBtn.addEventListener('click', () => {
    const listValue = inputList.value.trim();
    if (listValue) {
        state.lists.push(listValue);
        inputList.value = '';
        render();
    }
})

// Render function
function render() {
    listOutput.innerHTML = '';

    state.lists.forEach(list => {
        const li = document.createElement('li');
        li.textContent = list;
        listOutput.appendChild(li);
    })

    if (state.lists.length === 0) return;   

    if (state.lists.length > 0) {
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';

            removeBtn.addEventListener('click', () => {
            state.lists.pop();
            render();
        });

        listOutput.appendChild(removeBtn);
    } ;

}