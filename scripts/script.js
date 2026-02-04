let btn = document.querySelector(".menu-btn");
let menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hidden');
    btn.classList.toggle('change');
}