document.addEventListener('DOMContentLoaded', function() {
    // это то модальное окно, с которым и будем работать
    const modal = document.querySelector('#MDL_Сатурн');

    // назначаем обработчик события для клика по кнопке открытия окна
    document.querySelector('#BTN_Сатурн').addEventListener('click', openModal);

    /*
     * Обработчик события клика по кнопке открытия модального окна
     */
    function openModal() {
        modal.classList.add('modal-open');
        // обработчики событий, которые работают, когда окно открыто
        attachModalEvents();
    }

    /*
     * Функция назначает обработчики событий к элементам модального окна при открытии
     */
    function attachModalEvents() {
        // закрывать модальное окно при нажатии на крестик
        modal.querySelector('.close').addEventListener('click', closeModal);
        // закрывать модальное окно при нажатии клавиши Escape
        document.addEventListener('keydown', handleEscape);
        // закрывать модальное окно при клике вне контента модального окна
        modal.addEventListener('click', handleOutside);
    }

    /*
     * Обработчик события клика по кнопке закрытия модального окна
     */
    function closeModal() {
        modal.classList.remove('modal-open');
        // окно закрыто, эти обработчики событий больше не нужны
        detachModalEvents();
    }

    /*
     * Функция удаляет обработчики событий к элементам модального окна при закрытии
     */
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }

    /*
     * Функция закрывает модальное окно при нажатии клавиши Escape
     */
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    /*
     * Функция закрывает модальное окно при клике вне контента модального окна
     */
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_СЕВА');
    document.querySelector('#BTN_СЕВА').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_Поношенный_Сатурн');
    document.querySelector('#BTN_Поношенный_Сатурн').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_Повреждённый_Сатурн');
    document.querySelector('#BTN_Повреждённый_Сатурн').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_Поношенная_СЕВА');
    document.querySelector('#BTN_Поношенная_СЕВА').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_КИМ-99М_Малахит');
    document.querySelector('#BTN_КИМ-99М_Малахит').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_Поношенный_КИМ-99М_Малахит');
    document.querySelector('#BTN_Поношенный_КИМ-99М_Малахит').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_Поношенный_КИМ-99М_Малахит');
    document.querySelector('#BTN_Поношенный_КИМ-99М_Малахит').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_КИМ-99_Янтарь');
    document.querySelector('#BTN_КИМ-99_Янтарь').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_Поношенный_КИМ-99_Янтарь');
    document.querySelector('#BTN_Поношенный_КИМ-99_Янтарь').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_Заря-Б');
    document.querySelector('#BTN_Заря-Б').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_ИП-4м');
    document.querySelector('#BTN_ИП-4м').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_Дождевик');
    document.querySelector('#BTN_Дождевик').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_АМБ_17');
    document.querySelector('#BTN_АМБ_17').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_Glock-17');
    document.querySelector('#BTN_Glock-17').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('#MDL_TRI-zip');
    document.querySelector('#BTN_TRI-zip').addEventListener('click', openModal);
    function openModal() {
        modal.classList.add('modal-open');
        attachModalEvents();
    }
    function attachModalEvents() {
        modal.querySelector('.close').addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }
    function closeModal() {
        modal.classList.remove('modal-open');
        detachModalEvents();
    }
    function detachModalEvents() {
        modal.querySelector('.close').removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }
    function handleEscape(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    function handleOutside(event) {
        const isClickInside = !!event.target.closest('.modal-content');
        if (!isClickInside) {
            closeModal();
        }
    }
});