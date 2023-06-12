function getPasswordChecker(password) {
    return function passwordChecker(text) {
        return password === text;
    };
};


function getPasswordChecker_2(password) {return (text) => {return password === text}};


const colorGreen = (text) => {return '\033[32m' + text + '\033[0m'};
const colorMagenta = (text) => {return '\033[35m' + text + '\033[0m'};
const colorCyan = (text) => {return '\033[36m' + text + '\033[0m'};


const comparePassword = getPasswordChecker('123qwe');

console.log(colorMagenta('Функция №1'), comparePassword(1234), colorCyan('1234'));
console.log(colorMagenta('Функция №1'), comparePassword('tyufg'), colorCyan('tyufg'));
console.log(colorGreen('Функция №1'), colorGreen(comparePassword('123qwe')), colorGreen('123qwe'));

const comparePassword_2 = getPasswordChecker_2('1qaz2wsx');

console.log('');
console.log(colorMagenta('Функция №2'), comparePassword_2(9876), colorCyan('9876'));
console.log(colorMagenta('Функция №2'), comparePassword_2('edgrh'), colorCyan('edgrh'));
console.log(colorMagenta('Функция №2'), comparePassword_2(null), colorCyan('null'));
console.log(colorGreen('Функция №2'), colorGreen(comparePassword_2('1qaz2wsx')), colorGreen('1qaz2wsx'));
console.log(colorMagenta('Функция №2'), comparePassword_2(undefined), colorCyan('undefined'));

