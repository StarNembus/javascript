'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};
let text = document.querySelector('.text');
let navlinks = document.querySelectorAll('.nav-link');


navlinks.forEach(item => {
    item.addEventListener('click', function clickHandler(event) {
        changeText(event);
        changeActiveClass(event);
    });
});

function changeActiveClass(event) {
    let lastActive = findActive(navlinks);
    lastActive.classList.toggle('active');
    event.target.classList.toggle('active');
}

 function changeText(event) {
    for(let i = 0; i < navlinks.length; i++) {
        if (event.target === navlinks[i]) {
            text.textContent = texts['text' + (i + 1)];
            return;
        }
    }
       
}




function findActive(array){
    for(let i = 0; i < array.length; i++) {
        if (array[i].classList.contains('active')) {
            return array[i];
        }
    }
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
//  function changeText(event) {
//     event.textContent = 'text1';   
// }

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
//  */
//  function changeActiveClass(event) {
//     event.target.previousElementSibling.toggle('active');
// }



/**
 * Обработчик клика по .nav-link
//  * @param {MouseEvent} event 
//  */
//  function clickHandler(event) {
//     changeText(event);
//     changeActiveClass(event);
//  }
// здесь вызывайте changeText и changeActiveClass, и передавайте
// им объект события.







    

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/