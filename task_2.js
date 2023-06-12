const colorGreen = (text) => {return '\033[32m' + text + '\033[0m'};
const colorRed = (text) => {return '\033[31m' + text + '\033[0m'};
const colorYellow = (text) => {return '\033[33m' + text + '\033[0m'};

const numberForUser = Math.floor(Math.random() * 1000);
console.log(colorGreen("Исходное число: "), numberForUser);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const fs = require("fs");

const isInteger = num => /^-?[0-9]+$/.test(num);

function question () {
    count++;
    readline.question(`Попытка № ${count}. Введите число: `, (number) => {
        dataFile += `Попытка № ${count}. `
        if (number == 'end') {
            dataFile += 'Конец программы.\n'
            console.log(colorRed('Конец программы.'));
            readline.close();
            saveFile(dataFile);
        } else if (!isInteger(number)) {
            dataFile += `Ошибка. Вы ввели "${number}" - это не число!!!\n`
            console.log(colorRed(`Ошибка. Вы ввели "${number}" - это не число!!!`));
            question();
        } else if (number == numberForUser) {
            dataFile += `Поздравляем! Вы угадали число!!! Общее колличество попыток ${count}.\n`
            console.log(colorGreen(`Поздравляем! Вы угадали число!!! Общее колличество попыток ${count}.`));
            readline.close();
            saveFile(dataFile);
        } else if (number < numberForUser) {
            dataFile += `Ваше число ${number} меньше загаданного.\n`
            console.log(`Ваше число ${number} меньше загаданного.`);
            question();
        } else if (number > numberForUser) {
            dataFile += `Ваше число ${number} больше загаданного.\n`
            console.log(`Ваше число ${number} больше загаданного.`);
            question();
        };
    });
};

function saveFile (data) {
    fs.writeFile("logs.txt", data, function(error) {
        if (error) throw error; // если возникла ошибка
        console.log(colorYellow("Асинхронная запись файла завершена. Содержимое файла:"));
        let data = fs.readFileSync("logs.txt", "utf8");
        console.log(data);  // выводим считанные данные
    });
};

let count = 0;
let dataFile = '';
question();

 
