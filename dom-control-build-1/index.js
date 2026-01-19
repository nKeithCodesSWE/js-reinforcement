// Call Elements from the DOM
const textChange = document.querySelector("#btnChangeText");
const colorChange = document.querySelector("#btnChangeColor");

// Functions For DOM
function changeText() {
    if (textChange.textContent === "Not Clicked") {
        textChange.textContent = "Clicked";
    } else {
        textChange.textContent = "Not Clicked";
    }

    console.log("Clicked");
} 

function changeColor() {
    colorChange.classList.toggle('active');
}

// Event Listeners
textChange.addEventListener('click', changeText);
colorChange.addEventListener('click', changeColor);