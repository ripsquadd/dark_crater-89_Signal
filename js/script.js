const pattern = 'mfffffmmmfffm123bmmfffmmmfmfmccmcccfffffffffffffmmfmf'; // Задаём паттерна мерцания,
// где m[mute] - отключённое состояние,
// f[flash] - включённое
const element = document.querySelector('.lamp'); // Получаем элемент-лампу
const border = document.querySelector('.lamp-box'); // Получаем элемент-контернер лампы
const background = document.querySelector('.back'); //Получаем элемент-бэкграунд
const dark = document.querySelector('.lamp-item-first'); // Получаем dark_
const crater = document.querySelector('.lamp-item-second'); // Получаем crater-
const eightyNine = document.querySelector('.lamp-item-third'); // Получаем 89
let index = 0; // Индекс текущего символа в паттерне

function flicker() {
    if (pattern[index] === 'm') { //отключаем лампу
        muteInstance();
    } else if ((pattern[index] === 'f')) { //включаем лампу
        flashInstance();
    } else if ((pattern[index] === 'c')) {
        chargeInstance()
    } else if ((pattern[index] === '1')) {
        firstItemFlash();
        setTimeout(firstItemMute, 500);
    } else if ((pattern[index] === '2')) {
        secondItemFlash();
        setTimeout(secondItemMute, 500);
    } else if ((pattern[index] === '3')) {
        thirdItemFlash();
        setTimeout(thirdItemMute, 500);
    }else if ((pattern[index] === 'b')) {
        borderFlash();
        setTimeout(borderMute, 500);
    }
    index++;
    // Если индекс вышел за пределы паттерна, сбрасываем его
    if (index >= pattern.length) {
        index = 0;
    }
}

function muteInstance() {
    border.classList.remove('lamp-box-flash', 'lamp-box-charge');
    border.classList.add('lamp-box-mute');
    element.classList.remove('lamp-flash', 'lamp-charge');
    element.classList.add('lamp-mute');
    background.classList.remove('back-flash');
    background.classList.add('back-mute');
}
function flashInstance() {
    border.classList.remove('lamp-box-flash', 'lamp-box-charge');
    border.classList.add('lamp-box-flash');
    element.classList.remove('lamp-mute', 'lamp-charge');
    element.classList.add('lamp-flash');
    background.classList.remove('back-mute');
    background.classList.add('back-flash');
}
function chargeInstance() {
    border.classList.remove('lamp-box-flash');
    border.classList.add('lamp-box-charge');
    element.classList.remove('lamp-flash', 'lamp-mute');
    element.classList.add('lamp-charge');
    background.classList.remove('back-flash');
    background.classList.add('back-mute');
}

function borderMute() {
    border.classList.remove('lamp-box-flash', 'lamp-box-charge');
    border.classList.add('lamp-box-mute');
}
function borderFlash() {
    border.classList.remove('lamp-box-flash', 'lamp-box-charge');
    border.classList.add('lamp-box-flash');
}

function firstItemMute() {
    dark.classList.remove('item-flash', 'item-charge');
}
function firstItemFlash() {
    dark.classList.remove('item-mute', 'item-charge');
    dark.classList.add('item-flash');
}

function secondItemMute() {
    crater.classList.remove('item-flash', 'item-charge');
}
function secondItemFlash() {
    crater.classList.remove('item-mute', 'item-charge');
    crater.classList.add('item-flash');
}

function thirdItemMute() {
    eightyNine.classList.remove('item-flash', 'item-charge');
}
function thirdItemFlash() {
    eightyNine.classList.remove('item-mute', 'item-charge');
    eightyNine.classList.add('item-flash');
}


setInterval(flicker, 500); // Запускаем мерцание с интервалом в 500 миллисекунд