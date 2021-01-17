'use strict';
 
const btn = document.querySelector('.main-nav__toggle');
const nav = document.querySelector('.main-nav');


btn.addEventListener('click', () => {
    if (nav.classList.contains('main-nav--closed')) {
        nav.classList.remove('main-nav--closed');
        nav.classList.add('main-nav--opened');
    } else {
        nav.classList.remove('main-nav--opened');
        nav.classList.add('main-nav--closed');
    }
})