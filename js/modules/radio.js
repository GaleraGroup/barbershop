'use strict';

const svgRadio = document.querySelectorAll('.form-sign-up__beard-radio p svg'),
      inputs = document.querySelectorAll('.form-sign-up__input-radio'),
      subCircle = document.querySelectorAll('.sub-circle');

svgRadio.forEach((item, i) => {
    item.addEventListener('click', () => {
        inputs.forEach(radio => {
            radio.checked = false;
        });
        subCircle.forEach(circle => {
            circle.style.display = 'none';
        });
        inputs[i].checked = true;
        subCircle[i].style.display = 'block';
    });
});