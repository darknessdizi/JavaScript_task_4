function getPasswordChecker(password) {
    return function passwordChecker(text) {
        return password === text;
    };
};


function getPasswordChecker_2(password) {return (text) => {return password === text}};


const comparePassword = getPasswordChecker('123qwe');

console.log('Функция №1', comparePassword(1234), '1234');
console.log('Функция №1', comparePassword('tyufg'), 'tyufg');
console.log('Функция №1', comparePassword('123qwe'), '123qwe');

const comparePassword_2 = getPasswordChecker_2('1qaz2wsx');

console.log('');
console.log('Функция №2', comparePassword_2(9876), '9876');
console.log('Функция №2', comparePassword_2('edgrh'), 'edgrh');
console.log('Функция №2', comparePassword_2(null), 'null');
console.log('Функция №2', comparePassword_2('1qaz2wsx'), '1qaz2wsx');
console.log('Функция №2', comparePassword_2(undefined), 'undefined');