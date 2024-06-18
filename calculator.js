function procent(base_count_barter, discount) {
    let a = Number(base_count_barter)
    let b = Number(discount)
    let count_barter_with_discount = Number(Math.round(a - (a/100)*b))
    return count_barter_with_discount
}

let remnants_psi_beacon_saturn = 3360;
let red_fern_saturn = 1930;
let fragment_gamma_data_saturn = 660;
let substance_07270_saturn = 2900;
let abnormal_serum_saturn = 55;
let price_saturn = 2268120

function handleChangeSaturn(discount) {
    const discount_saturn = (document.getElementById("discount_saturn")).value
    if (discount.value[0] === '0') discount.value = 0;
    if (discount.value < 0) discount.value = 0;
    if (discount.value > 100) discount.value = 100;
    if (discount.value === '') discount.value = 0
    let discount_remnants_psi_beacon_saturn = procent(remnants_psi_beacon_saturn, discount_saturn)
    let discount_red_fern_saturn = procent(red_fern_saturn, discount_saturn)
    let discount_fragment_gamma_data_saturn = procent(fragment_gamma_data_saturn, discount_saturn)
    let discount_substance_07270_saturn = procent(substance_07270_saturn, discount_saturn)
    let discount_abnormal_serum_saturn = procent(abnormal_serum_saturn, discount_saturn)
    let discount_price_saturn = procent(price_saturn, discount_saturn)
    document.getElementById("remnants-psi-beacon-saturn-1").innerHTML = discount_remnants_psi_beacon_saturn
    document.getElementById("red-fern-saturn-1").innerHTML = discount_red_fern_saturn
    document.getElementById("fragment-gamma-data-saturn-1").innerHTML = discount_fragment_gamma_data_saturn
    document.getElementById("substance-07270-saturn-1").innerHTML = discount_substance_07270_saturn
    document.getElementById("abnormal-serum-saturn-1").innerHTML = discount_abnormal_serum_saturn
    document.getElementById("price-saturn-1").innerHTML = discount_price_saturn
}

let remnants_psi_beacon_shabby_saturn = 1820;
let red_fern_shabby_saturn = 1050;
let fragment_gamma_data_shabby_saturn = 360;
let substance_07270_shabby_saturn = 1570;
let abnormal_serum_shabby_saturn = 10;
let price_shabby_saturn = 1224700

let limboplasm_shabby_saturn = 24
let bitterleaf_shabby_saturn = 1160
let fragment_lambda_data_shabby_saturn = 264
let lim_shabby_saturn = 930

function handleChangeShabbySaturn(discount) {
    const discount_shabby_saturn = (document.getElementById("discount_shabby-saturn")).value
    if (discount.value[0] === '0') discount.value = 0;
    if (discount.value < 0) discount.value = 0;
    if (discount.value > 100) discount.value = 100;
    if (discount.value === '') discount.value = 0
    let discount_remnants_psi_beacon_shabby_saturn = procent(remnants_psi_beacon_shabby_saturn, discount_shabby_saturn)
    let discount_red_fern_shabby_saturn = procent(red_fern_shabby_saturn, discount_shabby_saturn)
    let discount_fragment_gamma_data_shabby_saturn = procent(fragment_gamma_data_shabby_saturn, discount_shabby_saturn)
    let discount_substance_07270_shabby_saturn = procent(substance_07270_shabby_saturn, discount_shabby_saturn)
    let discount_abnormal_serum_shabby_saturn = procent(abnormal_serum_shabby_saturn, discount_shabby_saturn)
    let discount_price_shabby_saturn = procent(price_shabby_saturn, discount_shabby_saturn)
    document.getElementById("remnants-psi-beacon-shabby-saturn-1").innerHTML = discount_remnants_psi_beacon_shabby_saturn
    document.getElementById("red-fern-shabby-saturn-1").innerHTML = discount_red_fern_shabby_saturn
    document.getElementById("fragment-gamma-data-shabby-saturn-1").innerHTML = discount_fragment_gamma_data_shabby_saturn
    document.getElementById("substance-07270-shabby-saturn-1").innerHTML = discount_substance_07270_shabby_saturn
    document.getElementById("abnormal-serum-shabby-saturn-1").innerHTML = discount_abnormal_serum_shabby_saturn
    document.getElementById("price-shabby-saturn-1").innerHTML = discount_price_shabby_saturn
    let discount_limboplasm_shabby_saturn = procent(limboplasm_shabby_saturn, discount_shabby_saturn)
    let discount_bitterleaf_shabby_saturn = procent(bitterleaf_shabby_saturn, discount_shabby_saturn)
    let discount_fragment_lambda_data_shabby_saturn = procent(fragment_lambda_data_shabby_saturn, discount_shabby_saturn)
    let discount_lim_shabby_saturn = procent(lim_shabby_saturn, discount_shabby_saturn)
    document.getElementById("limboplasm-shabby-saturn-2").innerHTML = discount_limboplasm_shabby_saturn
    document.getElementById("bitterleaf-shabby-saturn-2").innerHTML = discount_bitterleaf_shabby_saturn
    document.getElementById("fragment-lambda-data-shabby-saturn-2").innerHTML = discount_fragment_lambda_data_shabby_saturn
    document.getElementById("abnormal-serum-shabby-saturn-2").innerHTML = discount_abnormal_serum_shabby_saturn
    document.getElementById("lim-shabby-saturn-2").innerHTML = discount_lim_shabby_saturn
}

let remnants_psi_beacon_damaged_saturn_1 = 1010;
let red_fern_damaged_saturn_1 = 590;
let fragment_beta_data_damaged_saturn_1 = 270;
let substance_07270_damaged_saturn_1 = 880;
let price_damaged_saturn_1 = 634830

let remnants_psi_beacon_damaged_saturn_2 = 940;
let red_fern_damaged_saturn_2 = 540;
let fragment_beta_data_damaged_saturn_2 = 330;
let substance_07270_damaged_saturn_2 = 810;

function handleChangeDamagedSaturn(discount) {
    const discount_damaged_saturn = (document.getElementById("discount_damaged-saturn")).value
    if (discount.value[0] === '0') discount.value = 0;
    if (discount.value < 0) discount.value = 0;
    if (discount.value > 100) discount.value = 100;
    if (discount.value === '') discount.value = 0
    let discount_remnants_psi_beacon_damaged_saturn_1 = procent(remnants_psi_beacon_damaged_saturn_1, discount_damaged_saturn)
    let discount_red_fern_damaged_saturn_1 = procent(red_fern_damaged_saturn_1, discount_damaged_saturn)
    let discount_fragment_beta_data_damaged_saturn_1 = procent(fragment_beta_data_damaged_saturn_1, discount_damaged_saturn)
    let discount_substance_07270_damaged_saturn_1 = procent(substance_07270_damaged_saturn_1, discount_damaged_saturn)
    let discount_price_damaged_saturn_1 = procent(price_damaged_saturn_1, discount_damaged_saturn)
    document.getElementById("remnants-psi-beacon-damaged-saturn-1").innerHTML = discount_remnants_psi_beacon_damaged_saturn_1
    document.getElementById("red-fern-damaged-saturn-1").innerHTML = discount_red_fern_damaged_saturn_1
    document.getElementById("fragment-beta-data-damaged-saturn-1").innerHTML = discount_fragment_beta_data_damaged_saturn_1
    document.getElementById("substance-07270-damaged-saturn-1").innerHTML = discount_substance_07270_damaged_saturn_1
    document.getElementById("price-damaged-saturn-1").innerHTML = discount_price_damaged_saturn_1
    let discount_remnants_psi_beacon_damaged_saturn_2 = procent(remnants_psi_beacon_damaged_saturn_2, discount_damaged_saturn)
    let discount_red_fern_damaged_saturn_2 = procent(red_fern_damaged_saturn_2, discount_damaged_saturn)
    let discount_fragment_beta_data_damaged_saturn_2 = procent(fragment_beta_data_damaged_saturn_2, discount_damaged_saturn)
    let discount_substance_07270_damaged_saturn_2 = procent(substance_07270_damaged_saturn_2, discount_damaged_saturn)
    document.getElementById("remnants_psi_beacon-damaged-saturn-2").innerHTML = discount_remnants_psi_beacon_damaged_saturn_2
    document.getElementById("red_fern-damaged-saturn-2").innerHTML = discount_red_fern_damaged_saturn_2
    document.getElementById("fragment-beta-data-damaged-saturn-2").innerHTML = discount_fragment_beta_data_damaged_saturn_2
    document.getElementById("substance_07270-damaged-saturn-2").innerHTML = discount_substance_07270_damaged_saturn_2
}

let remnants_psi_beacon_seva = 550;
let red_fern_seva = 320;
let fragment_beta_data_seva = 243;
let substance_07270_seva = 480;
let price_seva = 595380

let limboplasm_seva = 8
let bitterleaf_seva = 350
let fragment_lambda_data_seva = 80
let lim_seva = 279

function handleChangeSeva(discount) {
    const discount_seva = (document.getElementById("discount_seva")).value
    if (discount.value[0] === '0') discount.value = 0;
    if (discount.value < 0) discount.value = 0;
    if (discount.value > 100) discount.value = 100;
    if (discount.value === '') discount.value = 0
    let discount_remnants_psi_beacon_seva = procent(remnants_psi_beacon_seva, discount_seva)
    let discount_red_fern_seva = procent(red_fern_seva, discount_seva)
    let discount_fragment_beta_data_seva = procent(fragment_beta_data_seva, discount_seva)
    let discount_substance_07270_seva = procent(substance_07270_seva, discount_seva)
    let discount_price_seva = procent(price_seva, discount_seva)
    document.getElementById("remnants-psi-beacon-seva").innerHTML = discount_remnants_psi_beacon_seva
    document.getElementById("red-fern-seva").innerHTML = discount_red_fern_seva
    document.getElementById("fragment-beta-data-seva").innerHTML = discount_fragment_beta_data_seva
    document.getElementById("substance-07270-seva").innerHTML = discount_substance_07270_seva
    document.getElementById("price-seva").innerHTML = discount_price_seva
    let discount_limboplasm_seva = procent(limboplasm_seva, discount_seva)
    let discount_bitterleaf_seva = procent(bitterleaf_seva, discount_seva)
    let discount_fragment_lambda_data_seva = procent(fragment_lambda_data_seva, discount_seva)
    let discount_lim_seva = procent(lim_seva, discount_seva)
    document.getElementById("limboplasm-seva").innerHTML = discount_limboplasm_seva
    document.getElementById("bitterleaf-seva").innerHTML = discount_bitterleaf_seva
    document.getElementById("fragment-lambda-data-seva").innerHTML = discount_fragment_lambda_data_seva
    document.getElementById("lim-seva").innerHTML = discount_lim_seva
}

let battery_remains_shabby_seva = 330;
let northern_moss_shabby_seva = 443;
let fragment_beta_data_shabby_seva = 134;
let datura_stone_shabby_seva = 510;
let price_shabby_seva = 102690

function handleChangeShabbySeva(discount) {
    const discount_shabby_seva = (document.getElementById("discount_shabby-seva")).value
    if (discount.value[0] === '0') discount.value = 0;
    if (discount.value < 0) discount.value = 0;
    if (discount.value > 100) discount.value = 100;
    if (discount.value === '') discount.value = 0
    let discount_battery_remains_shabby_seva = procent(battery_remains_shabby_seva, discount_shabby_seva)
    let discount_northern_moss_shabby_seva = procent(northern_moss_shabby_seva, discount_shabby_seva)
    let discount_fragment_beta_data_shabby_seva = procent(fragment_beta_data_shabby_seva, discount_shabby_seva)
    let discount_datura_stone_shabby_seva = procent(datura_stone_shabby_seva, discount_shabby_seva)
    let discount_price_shabby_seva = procent(price_shabby_seva, discount_shabby_seva)
    document.getElementById("battery-remains-shabby-seva").innerHTML = discount_battery_remains_shabby_seva
    document.getElementById("northern-moss-seva").innerHTML = discount_northern_moss_shabby_seva
    document.getElementById("fragment-beta-data-shabby-seva").innerHTML = discount_fragment_beta_data_shabby_seva
    document.getElementById("datura-stone-shabby-seva").innerHTML = discount_datura_stone_shabby_seva
    document.getElementById("price-shabby-seva").innerHTML = discount_price_shabby_seva
}

let remnants_radio_transmitter_malahit = 151;
let sprout_chernobyl_chamomile_malahit = 248;
let fragment_alfa_data_malahit = 114;
let rassolnik_malahit = 147;
let price_malahit = 54560

function handleChangeMalahit(discount) {
    const discount_malahit = (document.getElementById("discount_malahit")).value
    if (discount.value[0] === '0') discount.value = 0;
    if (discount.value < 0) discount.value = 0;
    if (discount.value > 100) discount.value = 100;
    if (discount.value === '') discount.value = 0
    let discount_remnants_radio_transmitter_malahit = procent(remnants_radio_transmitter_malahit, discount_malahit)
    let discount_sprout_chernobyl_chamomile_malahit = procent(sprout_chernobyl_chamomile_malahit, discount_malahit)
    let discount_fragment_alfa_data_malahit = procent(fragment_alfa_data_malahit, discount_malahit)
    let discount_rassolnik_malahit = procent(rassolnik_malahit, discount_malahit)
    let discount_price_malahit = procent(price_malahite, discount_malahit)
    document.getElementById("remnants-radio-transmitter-malahit").innerHTML = discount_remnants_radio_transmitter_malahit
    document.getElementById("sprout-chernobyl-chamomile-seva").innerHTML = discount_sprout_chernobyl_chamomile_malahit
    document.getElementById("fragment-alfa-data-malahit").innerHTML = discount_fragment_alfa_data_malahit
    document.getElementById("rassolnik-malahit").innerHTML = discount_rassolnik_malahit
    document.getElementById("price-malahit").innerHTML = discount_price_malahit
}





































































let clickableElementSaturn = document.querySelector('.clickable-saturn');
let hiddenContentsSaturn = document.querySelectorAll('.hidden-content-saturn');

clickableElementSaturn.addEventListener('click', function() {
    hiddenContentsSaturn.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementShabbySaturn = document.querySelector('.clickable-shabby-saturn');
let hiddenContentsShabbySaturn = document.querySelectorAll('.hidden-content-shabby-saturn');

clickableElementShabbySaturn.addEventListener('click', function() {
    hiddenContentsShabbySaturn.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementDamagedSaturn = document.querySelector('.clickable-damaged-saturn');
let hiddenContentsDamagedSaturn = document.querySelectorAll('.hidden-content-damaged-saturn');

clickableElementDamagedSaturn.addEventListener('click', function() {
    hiddenContentsDamagedSaturn.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementSeva = document.querySelector('.clickable-seva');
let hiddenContentsSeva = document.querySelectorAll('.hidden-content-seva');

clickableElementSeva.addEventListener('click', function() {
    hiddenContentsSeva.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementShabbySeva = document.querySelector('.clickable-shabby-seva');
let hiddenContentsShabbySeva = document.querySelectorAll('.hidden-content-shabby-seva');

clickableElementShabbySeva.addEventListener('click', function() {
    hiddenContentsShabbySeva.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementMalahit = document.querySelector('.clickable-KIM99M-malahit');
let hiddenContentsMalahit = document.querySelectorAll('.hidden-content-KIM99M-malahit');

clickableElementMalahit.addEventListener('click', function() {
    hiddenContentsMalahit.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementShabbyMalahit = document.querySelector('.clickable-shabby-KIM99M-malahit');
let hiddenContentsShabbyMalahit = document.querySelectorAll('.hidden-content-shabby-KIM99M-malahit');

clickableElementShabbyMalahit.addEventListener('click', function() {
    hiddenContentsShabbyMalahit.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementYantar = document.querySelector('.clickable-KIM99-yantar');
let hiddenContentsYantar = document.querySelectorAll('.hidden-content-KIM99-yantar');

clickableElementYantar.addEventListener('click', function() {
    hiddenContentsYantar.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementShabbyYantar = document.querySelector('.clickable-shabby-KIM99-yantar');
let hiddenContentsShabbyYantar = document.querySelectorAll('.hidden-content-shabby-KIM99-yantar');

clickableElementShabbyYantar.addEventListener('click', function() {
    hiddenContentsShabbyYantar.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementZaryaB = document.querySelector('.clickable-zaryaB');
let hiddenContentsZaryaB = document.querySelectorAll('.hidden-content-zaryaB');

clickableElementZaryaB.addEventListener('click', function() {
    hiddenContentsZaryaB.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementIP4m = document.querySelector('.clickable-IP4m');
let hiddenContentsIP4m = document.querySelectorAll('.hidden-content-IP4m');

clickableElementIP4m.addEventListener('click', function() {
    hiddenContentsIP4m.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementDozhdevik = document.querySelector('.clickable-dozhdevik');
let hiddenContentsDozhdevik = document.querySelectorAll('.hidden-content-dozhdevik');

clickableElementDozhdevik.addEventListener('click', function() {
    hiddenContentsDozhdevik.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});