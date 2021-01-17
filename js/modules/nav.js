'use strict';

window.addEventListener('DOMContentLoaded', () => {

    const siteList = document.querySelector('.site-list'),
        siteListItems = document.querySelectorAll('.site-list__item'),
        active = 'site-list__item--active',
        logoLink = document.querySelector('.page-header__logo-image'),
        btnLink = document.querySelector('.works__button');

    let stateObj = {};
    changeActiveState();

    siteListItems.forEach(item => {
        item.addEventListener('click', evt => {
            classRemover();
            if (evt.target.localName === 'a') {
                evt.target.href = '';
                evt.target.parentElement.classList.add(active);
            } else if (evt.target.localName === 'li') {
                evt.target.classList.add(active);
            }

            generateObjState();
            changeActiveState();
        });
    });

    //btnLink.addEventListener('click', changeActiveOfFirstItem);
    //logoLink.addEventListener('click', changeActiveOfFirstItem);

    function changeActiveOfFirstItem() {
        siteListItems.forEach((item, i) => {
            if (i === 0) {
                stateObj[i] = true;
            } else {
                stateObj[i] = false;
            }
        });
 
        localStorage.setItem('state', JSON.stringify(stateObj));
        changeActiveState();
    }

    function classRemover() {
        siteListItems.forEach(elem => {
            elem.classList.remove(active);
        });
    }


    function generateObjState() {
        siteListItems.forEach((item, i)=> {
            if (item.classList.contains(active)) {
                stateObj[i] = true;
            } else {
                stateObj[i] = false;
            }
        });

        localStorage.setItem('state', JSON.stringify(stateObj))
    }

    function changeActiveState() {
        let swap = Object.values(JSON.parse(localStorage.getItem('state')));
        swap.forEach((item, i) => {
            if (item) {
                siteListItems[i].classList.add(active);
            } else {
                siteListItems[i].classList.remove(active);
            }
        });
    }
    
});