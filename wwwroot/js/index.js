// Simple Carousel Functionality
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let index = 0;

function showImage(idx) {
    const width = images[0].clientWidth;
    carousel.style.transform = `translateX(${-idx * width}px)`;
}

rightArrow.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage(index);
});

leftArrow.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});

// Redirect to events page when an image is clicked
function redirectToEvents() {
    window.location.href = "events.html";
}

// Save text area content locally
const textArea = document.getElementById('editableText');
textArea.addEventListener('input', () => {
    localStorage.setItem('editableText', textArea.value);
});

// Load saved text
window.addEventListener('load', () => {
    const saved = localStorage.getItem('editableText');
    if (saved) textArea.value = saved;
});
