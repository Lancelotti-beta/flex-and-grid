// Minha resolução para esconder o menu da pagina 
// function ativaEdesativaMenu(){
//     $nav.classList.toggle('menu-lateral__escondido')
// }

// const $menu = document.getElementsByClassName('container__menu')[0];
// const $nav = document.getElementsByClassName('menu-lateral')[0];

// $menu.addEventListener('click', ativaEdesativaMenu)

//Resolução da aula

const $menu = document.querySelector('.container__menu');
const $nav = document.querySelector('.menu-lateral');

$menu.addEventListener('click', () => {
    $nav.classList.toggle('menu-lateral__ativo');
})

// const $menuLateral = document.querySelectorAll('.menu-lateral__link');

// function linkAtivo() {
//     $menuLateral.forEach((item) =>
//         item.classList.remove('menu-lateral__link--ativo'));
//     this.classList.add('menu-lateral__link--ativo');
// }

// $menuLateral.forEach((item) =>
//     item.addEventListener('click', linkAtivo));
