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

function question (quest) {
    return new Promise ((resolve, rejects) => {
        readline.question(quest, (number) => {
            resolve(number);
        });
    });
};

async function input () {
    while (true) {
        count++;
        const data = await question(`Попытка № ${count}. Введите число: `);
        dataFile += `Попытка № ${count}. `;
        if (data == 'end') {
            dataFile += 'Конец программы.\n'
            console.log(colorRed('Конец программы.'));
            readline.close();
            await saveFile(dataFile);
            break;
        } else if (!isInteger(data)) {
            dataFile += `Ошибка. Вы ввели "${data}" - это не число!!!\n`
            console.log(colorRed(`Ошибка. Вы ввели "${data}" - это не число!!!`));
        } else if (data == numberForUser) {
            dataFile += `Поздравляем! Вы угадали число!!! Общее колличество попыток ${count}.\n`
            console.log(colorGreen(`Поздравляем! Вы угадали число!!! Общее колличество попыток ${count}.`));
            readline.close();
            await saveFile(dataFile);
            break;
        } else if (data < numberForUser) {
            dataFile += `Ваше число ${data} меньше загаданного.\n`
            console.log(`Ваше число ${data} меньше загаданного.`);
        } else if (data > numberForUser) {
            dataFile += `Ваше число ${data} больше загаданного.\n`
            console.log(`Ваше число ${data} больше загаданного.`);
        };
    };
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
input();
