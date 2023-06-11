const numberForUser = Math.floor(Math.random() * 1000)
console.log("Исходное число: ", numberForUser)
while (true) {
    let numberFromUser = +prompt("Введите загаданное число: ")
    console.log("Число пользователя: ", numberFromUser)
    if (isNaN(numberFromUser)) {
        alert("Вы ввели не число")
    } else if (numberFromUser === numberForUser) {
        alert("Вы угадали !!!")
        break
    } else if (numberFromUser < numberForUser) {
        alert("Ваше число меньше.")
    } else if (numberFromUser > numberForUser) {
        alert("Ваше число больше.")
    }
}