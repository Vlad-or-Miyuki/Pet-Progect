// кнопки для скрытия категорий сайд бара
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
// кнопки для скрытия категорий сайд бара

// кнопки для фильтра категорий
const buttons = document.querySelectorAll('.button')
const cards = document.querySelectorAll('.card')   

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const currentCategory = button.dataset.filter
        // Здесь сработает функция
        filter(currentCategory, cards)
    })
})

function filter (category, items) {
    items.forEach((item) => {
        // проверка на соответствие категории
        const isItemFiltered = !item.classList.contains(category)
        // Заведем переменную для показа всех карточек в категории All
        const isShowAll = category.toLowerCase() === 'all'
        // Если карточка не содержит данную категорию
        if (isItemFiltered && !isShowAll) {
        // Добавлять класс hide
            item.classList.add('hide')
        // В противном случае, удалять класс hide
        } else {
            item.classList.remove('hide')
      }
    })
  }
// кнопки для фильтра категорий