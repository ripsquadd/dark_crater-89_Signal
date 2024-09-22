const pattern = 'mfffmmmfffmmmfmfmfmffffffmfmf'; // Задаём паттерна мерцания,
                                // где m[mute] - отключённое состояние, а f[flash] - включённое
const element = document.querySelector('.lamp'); // Получаем элемент-лампу
const border = document.querySelector('.lamp-box'); // Получаем элемент-контернер лампы
const background = document.querySelector('.wrapper'); //Получаем элемент-бэкграунд
let index = 0; // Индекс текущего символа в паттерне

function flicker() {
    if (pattern[index] === 'm') { //отключаем лампу
        border.classList.remove('lamp-box-flash');
        border.classList.add('lamp-box-mute');
        element.classList.remove('lamp-flash');
        element.classList.add('lamp-mute');
        background.classList.remove('back-flash');
        background.classList.add('back-mute');
    } else if ((pattern[index] === 'f')) { //включаем лампу
        border.classList.remove('lamp-box-mute');
        border.classList.add('lamp-box-flash');
        element.classList.remove('lamp-mute');
        element.classList.add('lamp-flash');
        background.classList.remove('back-mute');
        background.classList.add('back-flash');
    }
    index++;
    // Если индекс вышел за пределы паттерна, сбрасываем его
    if (index >= pattern.length) {
        index = 0;
    }
}

setInterval(flicker, 500); // Запускаем мерцание с интервалом в 500 миллисекунд