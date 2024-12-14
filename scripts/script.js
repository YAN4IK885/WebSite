document.addEventListener('DOMContentLoaded', function() {
    // Burger Menu Toggle
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.top-nav .menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
} );

function changeTextColor(color) {
    document.querySelector('.banner_heading').style.color = color;
}

function changeFontSize(size) {
    document.querySelector('.banner_heading').style.fontSize = size;
}

function changeContainerWidth(width) {
    document.querySelector('.banner').style.width = width + 'px';
}

function changeContainerHeight(height) {
    document.querySelector('.banner').style.height = height + 'px';
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function applyCustomValue(value) {
    document.querySelector('.banner_heading').style.fontSize = value + 'px';
}