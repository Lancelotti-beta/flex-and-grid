
const $menu = document.querySelector('.container__menu');
const $nav = document.querySelector('.menu-lateral');

$menu.addEventListener('click', () => {
    $nav.classList.toggle('menu-lateral__ativo')
});
