let contatoAtual = null;

const conversas = {};

function abrirModal(nome) {

    contatoAtual = nome;

    //coloca o nome da pessoa que estamos conversando
    document.getElementById('p-header-modal').textContent = nome;

    //ele cria o contato, caso nao exista, dentro da nossa conversas
    if (!conversas[nome]) {
        conversas[nome] = [];
    }

    if (window.innerWidth <= 768) {
        document.getElementById('p-header-modal').textContent = nome;
        //abre o modal quando clica no contato
        document.getElementById('tela-mensagem-mobile').showModal();
    } else {
        document.getElementById('p-header-mensagem').textContent = nome;
    }

    renderizarMensagens();
}

function closeModal() {
    document.getElementById('tela-mensagem-mobile').close();
}

function enviarMensagemModal() {

    //busca a caixa de mensagem que escrevemos a mensagem
    const textArea = document.getElementById('text-area-message-modal');

    //retira os espaços iniciais e finais
    const texto = textArea.value.trim();

    //verifica se tem algo escrito
    if (!texto) return;

    //ele cria uma conversa no contato caso nao exista
    if (!conversas[contatoAtual]) {
        conversas[contatoAtual] = [];
    }

    //aqui ele add o tipo da mensagem e o conteudo
    conversas[contatoAtual].push({
        tipo: "enviada",
        texto: texto
    });

    //ele limpa o textarea
    textArea.value = "";
    textArea.style.height = "auto";

    renderizarMensagens();
}

function renderizarMensagens() {

    //busca o nosso elemento pai
    const container = document.getElementById('div-body-mensagem-modal');

    container.innerHTML = "";

    //aqui ele passa um por um para sabver q e add as msg
    conversas[contatoAtual].forEach(msg => {

        const div = document.createElement('div');

        if (msg.tipo === "enviada") {

            div.classList.add("div-mensagem-enviada");

            div.innerHTML = `
                <div class="message-enviada">
                    <p class="p-mensagem">${msg.texto}</p>
                </div>
            `;

        } else {

            div.classList.add("div-mensagem-recebida");

            div.innerHTML = `
                <div class="mensagem-recebida">
                    <p class="p-mensagem">${msg.texto}</p>
                </div>
            `;
        }

        container.appendChild(div);
    });

    container.scrollTop = container.scrollHeight;
}

function getContainerMensagens() {
    return window.innerWidth <= 768
        ? document.getElementById('div-body-mensagem-modal')
        : document.getElementById('div-body-mensagem');
}