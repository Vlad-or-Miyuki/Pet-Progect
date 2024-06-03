var Остатки_пси_маячка_Сатурн = 3360;
var Рыжий_папоротник_Сатурн = 1930;
var Фрагмент_данных_Гамма_Сатурн = 660;
var Вещество_07270_Сатурн = 2900;
var Аномальная_сыворотка_Сатурн = 55;

function procent(barter, skidon) {
    let a = Number(barter)
    let b = Number(skidon)
    let ure = Number(Math.round(a - (a/100)*b))
    return ure
}

function handleChange(skidon) {
    if (skidon.value[0] === '0') skidon.value = 0;
    if (skidon.value < 0) skidon.value = 0;
    if (skidon.value > 100) skidon.value = 100;
    if (skidon.value === '') skidon.value = 0
    const saturn = (document.getElementById("skidon_Saturn")).value
    document.getElementById("Остатки_пси_маячка_Сатурн").innerHTML = procent(Остатки_пси_маячка_Сатурн, saturn)
}

