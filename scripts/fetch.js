// fetch.js

// Функція для отримання жарту з API
async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) {
            throw new Error('Мережевий запит не вдався');
        }
        const joke = await response.json();

        // Виводимо жарт на сторінку
        displayJoke(joke.setup, joke.punchline);
    } catch (error) {
        console.error('Помилка:', error);
        alert('Не вдалося отримати жарт, спробуйте ще раз.');
    }
}

// Функція для відображення жарту на сторінці
function displayJoke(setup, punchline) {
    const jokeElement = document.getElementById('joke');
    jokeElement.innerHTML = `<blockquote><i>${setup}</i><br><strong>${punchline}</strong></blockquote>`;
}

// Викликаємо fetchJoke при завантаженні сторінки
window.onload = fetchJoke;
