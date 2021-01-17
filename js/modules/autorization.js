'user strict';
 
const mainNav = document.querySelector('.main-nav'),
      loginUser = document.querySelector('.user-list__login'),
      autorization = document.querySelector('.autorization');



loginUser.addEventListener('click', evt => {
    evt.preventDefault();
    if (mainNav.classList.contains('main-nav--opened')) {
        if (autorization.classList.contains('visually-hidden')) {
            autorization.classList.remove('visually-hidden');
        }
    }
});