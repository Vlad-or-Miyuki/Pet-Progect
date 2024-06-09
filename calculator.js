let Остатки_пси_маячка_Сатурн = 3360;
let Рыжий_папоротник_Сатурн = 1930;
let Фрагмент_данных_Гамма_Сатурн = 660;
let Вещество_07270_Сатурн = 2900;
let Аномальная_сыворотка_Сатурн = 55;
let Цена_Сатурн = 2268120

function procent(barter, skidon) {
    let a = Number(barter)
    let b = Number(skidon)
    let ure = Number(Math.round(a - (a/100)*b))
    return ure
}

function handleChange(skidon) {
    const saturn = (document.getElementById("skidon_Saturn")).value
    if (skidon.value[0] === '0') skidon.value = 0;
    if (skidon.value < 0) skidon.value = 0;
    if (skidon.value > 100) skidon.value = 100;
    if (skidon.value === '') skidon.value = 0
    document.getElementById("Остатки_пси_маячка_Сатурн").innerHTML = procent(Остатки_пси_маячка_Сатурн, saturn)
    document.getElementById("Рыжий_папоротник_Сатурн").innerHTML = procent(Рыжий_папоротник_Сатурн, saturn)
    document.getElementById("Фрагмент_данных_Гамма_Сатурн").innerHTML = procent(Фрагмент_данных_Гамма_Сатурн, saturn)
    document.getElementById("Вещество_07270_Сатурн").innerHTML = procent(Вещество_07270_Сатурн, saturn)
    document.getElementById("Аномальная_сыворотка_Сатурн").innerHTML = procent(Аномальная_сыворотка_Сатурн, saturn)
    document.getElementById("Цена_Сатурн").innerHTML = procent(Цена_Сатурн, saturn)
}

