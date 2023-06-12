const colorGreen = (text) => {return '\033[32m' + text + '\033[0m'};
const colorRed = (text) => {return '\033[31m' + text + '\033[0m'};

const numberForUser = Math.floor(Math.random() * 1000);
console.log(colorGreen("Исходное число: "), numberForUser);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const isInteger = num => /^-?[0-9]+$/.test(num);

function question () {
    count++;
    readline.question(`Попытка № ${count}. Введите число: `, (number) => {
        if (number == 'end') {
            console.log(colorRed('Конец программы.'));
            readline.close();
        } else if (!isInteger(number)) {
            console.log(colorRed('Ошибка. Вы ввели не число!!!'));
            question();
        } else if (number == numberForUser) {
            console.log(colorGreen(`Поздравляем! Вы угадали!!! Общее колличество попыток ${count}.`));
            readline.close();
        } else if (number < numberForUser) {
            console.log('Ваше число меньше.');
            question();
        } else if (number > numberForUser) {
            console.log('Ваше число больше.');
            question();
        };
    });
};

let count = 0;
question();