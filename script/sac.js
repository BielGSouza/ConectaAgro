function enviarFormulario() {
    let nome = document.getElementById('nome')
    let sobrenome = document.getElementById('sobrenome')
    let email = document.getElementById('email')
    let telefone = document.getElementById('telefone')
    let assunto = document.getElementById('assunto')
    let mensagem = document.getElementById('mensagem')

    let quantidadeLetrasNome = QuantidadeDeLetras(nome.value)
    let quantidadeLetrasSobrenome = QuantidadeDeLetras(sobrenome.value)

    /* Verifica se os campos estão preenchidos */
    if (!nome.value || !sobrenome.value || !email.value || !telefone.value || !assunto.value || !mensagem.value) {
        modalAviso("Preencha todos os campos para enviar o formulário!", "erro")
    } else {
        //Verifica quantas letras tem, no minimo 2
        if (quantidadeLetrasNome < 2 && quantidadeLetrasSobrenome < 2) {
            modalAviso("Por favor preencha seu nome e/ou sobrenome corretamente, minimo de 2 letras", "erro")
        } else {
            if (mensagem.value.length > 500) {
                modalAviso("Há mais caracteres que o permetido no campo Mensagem!", "erro")
            } else {
                if (!validarEmail(email.value)) {
                    modalAviso("Email inválido", "erro")
                } else {

                    modalAviso("Pedido enviado ao suporte!", "sucesso")
                    /* Faz os campos serem limpos */
                    nome.value = ""
                    sobrenome.value = ""
                    email.value = ""
                    telefone.value = ""
                    assunto.value = ""
                    mensagem.value = ""
                }
            }
        }
    }
}

/* Modifica os numeros do telefone para ficar bonito */
const inputTelefone = document.getElementById('telefone');

inputTelefone.addEventListener('input', () => {

    let valor = inputTelefone.value;

    valor = valor.replace(/\D/g, '');

    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');

    valor = valor.replace(/(\d{5})(\d)/, '$1-$2');

    inputTelefone.value = valor;

});

/* Verifica se o input mensagem tem mais de 300 caracteres */

const inputMensagem = document.getElementById("mensagem")
const paragrafo = document.getElementById("p-atencao")

inputMensagem.addEventListener("input", () => {
    if (inputMensagem.value.length > 500) {
        paragrafo.style.color = "red"
    } else {
        paragrafo.style.color = "green"
    }

})

function modalAviso(assunto, indice) {
    const idModalAviso = document.getElementById('modal-aviso');

    idModalAviso.innerHTML = `
        <div id="linhaColorida"></div>
        <p id="p-modal-aviso" class="mb-0 paragrafo">${assunto}</p>
    `

    const linhaColorida = document.getElementById('linhaColorida')

    if (indice == "erro") {
        linhaColorida.style.backgroundColor = 'red'
    } else if (indice == "sucesso") {
        linhaColorida.style.backgroundColor = '#88E788'
    }



    idModalAviso.style.display = 'block';

    setTimeout(() => {
        idModalAviso.style.display = 'none';
    }, 5000)
}

// Função para verificar a quantidade de letras

function QuantidadeDeLetras(elemento) {
    let quantasLetras

    quantasLetras = elemento.replace(/\s/g, "");

    return quantasLetras.length
}

// Validar email colocado

function validarEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}