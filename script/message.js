const inputPesquisa = document.getElementById('input-header-contatos');

inputPesquisa.addEventListener('input', () => {

    const valor = inputPesquisa.value.toLowerCase();

    const contatos = document.querySelectorAll('.card-contato');

    contatos.forEach(contato => {

        const nome = contato.querySelector('p')
            .textContent
            .toLowerCase();

        if (nome.includes(valor)) {
            contato.style.display = 'flex';
        } else {
            contato.style.display = 'none';
        }

    });

});

const textarea = document.getElementById('text-area-message');

textarea.addEventListener('input', () => {

    textarea.style.height = 'auto';

    textarea.style.height = textarea.scrollHeight + 'px';

});

/* Função para enviar mensagem */


function enviarMensagem() {
    let divBodyMensagem = document.getElementById('div-body-mensagem')
    let textArea = document.getElementById('text-area-message')
    let valorTextArea = textArea.value

    let div = document.createElement('div')
    div.classList.add("div-mensagem-enviada")

    div.innerHTML = `
        <div class="message-enviada">
            <p class="p-mensagem">${valorTextArea}</p>
        </div>
    `
    divBodyMensagem.appendChild(div);

    textArea.value = ""
    textArea.style.height = 'auto';
    divBodyMensagem.scrollTop = divBodyMensagem.scrollHeight;
}

function enviarMensagemModal() {
    let divBodyMensagem = document.getElementById('div-body-mensagem-modal')
    let textArea = document.getElementById('text-area-message-modal')
    let valorTextArea = textArea.value

    let div = document.createElement('div')
    div.classList.add("div-mensagem-enviada")

    div.innerHTML = `
        <div class="message-enviada">
            <p class="p-mensagem">${valorTextArea}</p>
        </div>
    `
    divBodyMensagem.appendChild(div);

    textArea.value = ""
    textArea.style.height = 'auto';
    divBodyMensagem.scrollTop = divBodyMensagem.scrollHeight;
}