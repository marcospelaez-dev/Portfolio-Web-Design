
//Function open and close menu mobile

let menu1 = document.getElementById('menu-1');
let malha = document.getElementById('malha-menu');

function openMenu(){
    menu1.classList.remove('menu-close');
    menu1.classList.add('menu-open');
    malha.classList.remove('menu-close');
    malha.classList.add('menu-open');
}

function closeMenu(){
    menu1.classList.remove('menu-open');
    menu1.classList.add('menu-close');
    malha.classList.remove('menu-open');
    malha.classList.add('menu-close');
}