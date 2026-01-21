// 1. State (One source of truth)
let likes = 0;

// 2. Gather elements
const likeStatus = document.getElementById('likes');
const likeBtn = document.getElementById('like');
const unlikeBtn = document.getElementById('unlike');

// 3. Render UI
function render() {
    likeStatus.textContent = likes;
}

// 3. EventListener on buttons
likeBtn.addEventListener('click', () => {
    likes = likes + 1;
    render();
    console.log('Liked');
});

unlikeBtn.addEventListener('click', () => {
    if (likes === 0) {
        return;
    } else {
        likes = likes - 1;
        render();
        console.log('unliked');
    }
});