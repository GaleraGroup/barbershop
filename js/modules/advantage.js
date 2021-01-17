'use strict';


const toggle = document.querySelectorAll('.slider-toggles__toggle--white'),
      advItem = document.querySelectorAll('.advantage-items'),
      activeClass = 'advantage-items--active';



Array.from(toggle).forEach((dot, i) => {
    dot.addEventListener('click', () => {
        if (dot.checked) {
            advItem.forEach(item => item.classList.remove(activeClass))
            advItem[i].classList.add(activeClass);
        }
    });
});