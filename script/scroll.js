function mover(direcao) {
    const telaRolavel = document.getElementById('tela-rolavel-produtos');
    const card = document.querySelector('.card-produto');

    const estilo = window.getComputedStyle(telaRolavel);
    const gap = parseInt(estilo.gap);

    const distancia = card.offsetWidth + gap;

    if (direcao === 'direita') {
        telaRolavel.scrollLeft -= distancia;
    } else {
        telaRolavel.scrollLeft += distancia;
    }
}

function moverTwo(direcao) {
    const telaRolavel = document.getElementById('tela-rolavel-produtos2');
    const card = document.querySelector('.card-produto');

    const estilo = window.getComputedStyle(telaRolavel);
    const gap = parseInt(estilo.gap);

    const distancia = card.offsetWidth + gap;

    if (direcao === 'direita') {
        telaRolavel.scrollLeft -= distancia;
    } else {
        telaRolavel.scrollLeft += distancia;
    }
}