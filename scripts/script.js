document.addEventListener('DOMContentLoaded', function() {
    // Burger Menu Toggle
    const burger = document.getElementById('burger');
    const menu = document.querySelector('.top-nav .menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
} );