// state
let isDarkMode = false;

// grab ui elements
const toggleTheme = document.getElementById('theme-toggle');
const themeStatus = document.getElementById('status');
const bodyPage = document.body;

// event handler
toggleTheme.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    render();
});

// render
function render() {
    bodyPage.classList.toggle('light', isDarkMode);
    bodyPage.classList.toggle('dark', !isDarkMode);

    themeStatus.textContent = !isDarkMode ? 'Dark Mode' : 'Light Mode';
}