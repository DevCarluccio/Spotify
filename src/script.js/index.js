const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".navbar-items");

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})