let btn = document.querySelector(".menu-btn");
let menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    const isOpen = menu.classList.toggle('hidden') === false;
    btn.classList.toggle('change');

    btn.setAttribute('aria-label', isOpen ? 'Close navigation manu' : 'Open navigation menu')
    btn.setAttribute('aria-expanded', isOpen);

}