const menu = document.querySelector('.menu');
const navlinks = document.querySelector('.navlinks');

menu.addEventListener('click', () => {
    navlinks.classList.toggle('block');
});