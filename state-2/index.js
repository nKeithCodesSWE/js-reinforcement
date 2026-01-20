// 1. State
let count = 0;
// 2. Elements
const countEl = document.getElementById("count");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");

// 3. Render (UI) - One location for UI updates
function render() {
    countEl.textContent = count;
}

// 4. Events 
incBtn.addEventListener("click", () => {
    count = count + 1;
    render();
    console.log("add");
});

decBtn.addEventListener("click", () => {
    count = count - 1
    render();
    console.log("subtract");
})