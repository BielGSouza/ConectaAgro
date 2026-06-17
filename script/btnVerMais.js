const divNoticias = document.getElementById("div-card-horizontal");

let contador = 1;

function mostrarMaisNoticias() {
    for (let i = 0; i < 5; i++) {
        const div = document.createElement("div")

        div.classList.add("card-horizontal");

        div.innerHTML = `
            <img src="../assets/sectionQuemSomos/photoSecundaria.png" alt="Notícia ${contador}" height="
            70%">
            <h4 class="subtitulo-pequeno mb-0">Título da Notícia ${contador}</h4>
        `;

        divNoticias.appendChild(div);
        contador++;
    }

}

mostrarMaisNoticias();

window.addEventListener("scroll", () => {

    const fimDaPagina =
        window.innerHeight + window.scrollY
        >= document.body.offsetHeight - 700;

    if (fimDaPagina && contador <= 20) {
        mostrarMaisNoticias();
    }

});

const novidades = document.getElementById("div-novidades");

novidades.addEventListener("wheel", (event) => {

    event.preventDefault();

    novidades.scrollLeft += event.deltaY;

});

function verMais() {
    const divNoticias = document.getElementById("div-card-horizontal");
    
    for (let i = 0; i < 5; i++) {
        const div = document.createElement("div")

        div.classList.add("card-horizontal");

        div.innerHTML = `
            <img src="../assets/sectionQuemSomos/photoSecundaria.png" alt="Notícia ${contador}" height="75%">
            <h4 class="h3-news card-title">Título da Notícia ${contador}</h4>
        `;

        divNoticias.appendChild(div);
        contador++;
    }
}