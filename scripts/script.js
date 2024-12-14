document.addEventListener('DOMContentLoaded', function() {
    // Burger Menu Toggle
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.top-nav .menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
} );

const initialStyles = {
    textColor: 'white',
    fontSize: '32px',
    containerWidth: '1440px',
    containerHeight: '300px',
    backgroundColor: 'white'
};

function resetStyles() {
    // Відновлюємо початкові стилі
    changeTextColor(initialStyles.textColor);
    changeFontSize(initialStyles.fontSize);
    changeContainerWidth(initialStyles.containerWidth);
    changeContainerHeight(initialStyles.containerHeight);
    changeBackgroundColor(initialStyles.backgroundColor);

    // Скидаємо значення селекторів та полів
    document.getElementById('fontSize').value = initialStyles.fontSize;
    document.getElementById('containerWidth').value = 600; // початкове значення
    document.getElementById('containerHeight').value = 400; // початкове значення
    document.getElementById('customValue').value = ''; // очищаємо поле введення
}

function togglePanel() {
    const panel = document.getElementById('stylePanel');
    if (panel.style.display === 'none' || panel.style.display === '') {
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
}

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