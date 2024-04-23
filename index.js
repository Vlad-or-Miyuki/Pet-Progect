// let clickableElement = document.querySelector('.clickable');
// let hiddenContent = document.querySelector('.hidden-content');

// clickableElement.addEventListener('click', function() {
//     if (hiddenContent.style.display === 'none') {
//         hiddenContent.style.display = 'block';

//         let mainContent = document.querySelector('.main');
//         mainContent.style.marginLeft = '150px';
//     } else {
//         hiddenContent.style.display = 'none';

//         let mainContent = document.querySelector('.main');
//         mainContent.style.marginLeft = '0';

//         let sidebar = document.querySelector('.sidebar');
//         sidebar.style.width = '85px';
//     }
// });


let clickableElement = document.querySelector('.clickable');
let hiddenContents = document.querySelectorAll('.hidden-content');

clickableElement.addEventListener('click', function() {
    hiddenContents.forEach(function(hiddenContent) {
        if (hiddenContent.style.display === 'none') {
            hiddenContent.style.display = 'block';
        } else {
            hiddenContent.style.display = 'none';
        }
    });
});