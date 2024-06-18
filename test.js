let remnants_radio_transmitter_malahit = 330;
let sprout_chernobyl_chamomile_malahit = 443;
let fragment_alfa_data_malahit = 134;
let rassolnik_malahit = 510;

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
    document.getElementById("remnants_radio_transmitter-malahit").innerHTML = discount_remnants_radio_transmitter_malahit
    document.getElementById("sprout_chernobyl_chamomile-seva").innerHTML = discount_sprout_chernobyl_chamomile_malahit
    document.getElementById("fragment-alfa-data-malahit").innerHTML = discount_fragment_alfa_data_malahit
    document.getElementById("rassolnik-malahit").innerHTML = discount_rassolnik_malahit
}