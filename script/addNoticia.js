function criarNoticia() {
    // 1. Pega os valores digitados
    const titulo = document.getElementById('add-titulo').value;
    const imgUrl = document.getElementById('add-img').value;
    let link = document.getElementById('add-link').value;

    // 2. Validação básica
    if (titulo === "" || imgUrl === "") {
        alert("Por favor, preencha o título e a URL da imagem.");
        return;
    }

    if (link === "") {
        link = "#"; // Se não colocar link, a página não quebra
    }

    // 3. Cria a tag <a>
    const novoCard = document.createElement('a');
    novoCard.className = 'card-horizontal';
    novoCard.href = link;
    novoCard.target = '_blank';

    // 4. Cria a tag <img>
    const novaImg = document.createElement('img');
    novaImg.src = imgUrl;
    novaImg.alt = titulo;

    // 5. Cria a tag <h3>
    const novoH3 = document.createElement('h3');
    novoH3.textContent = titulo;

    // 6. Monta o card juntando tudo
    novoCard.appendChild(novaImg);
    novoCard.appendChild(novoH3);

    // 7. Adiciona no topo da div de notícias
    const containerNoticias = document.getElementById('cards-noticias');
    containerNoticias.prepend(novoCard);

    // 8. Limpa os campos para a próxima
    document.getElementById('add-titulo').value = '';
    document.getElementById('add-img').value = '';
    document.getElementById('add-link').value = '';
}
