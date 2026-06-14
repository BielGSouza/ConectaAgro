let iconeMenu = document.getElementById('icone-menu');
let menuHamburguer = document.getElementById('menuHamburguer')

iconeMenu.addEventListener('click', abrirMenuHamburguer)

function abrirMenuHamburguer() {
    menuHamburguer.classList.toggle("ativo")
}