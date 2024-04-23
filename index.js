let clickableElementWeapon = document.querySelector('.clickable-weapon');
let hiddenContentsWeapon = document.querySelectorAll('.hidden-content-weapon');

clickableElementWeapon.addEventListener('click', function() {
    hiddenContentsWeapon.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementArmor = document.querySelector('.clickable-armor');
let hiddenContentsArmor = document.querySelectorAll('.hidden-content-armor');

clickableElementArmor.addEventListener('click', function() {
    hiddenContentsArmor.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

let clickableElementOther = document.querySelector('.clickable-other');
let hiddenContentsOther = document.querySelectorAll('.hidden-content-other');

clickableElementOther.addEventListener('click', function() {
    hiddenContentsOther.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});

