function enviarFormulario() {
    let nome = document.getElementById('in-nome')
    let sobrenome = document.getElementById('in-sobrenome')
    let email = document.getElementById('in-email')
    let telefone = document.getElementById('in-telefone')
    let assunto = document.getElementById('sel-assunto')
    let mensagem = document.getElementById('area-mensagem')

    /* Verifica se os campos estão preenchidos */
    if (!nome.value || !sobrenome.value || !email.value || !telefone.value || !assunto.value || !mensagem.value) {
        alert("Preencha todos os campos para enviar o formulário!")
    } else {
        alert("Pedido enviado ao suporte!")
        /* Faz os campos serem limpos */
        nome.value = ""
        sobrenome.value = ""
        email.value = ""
        telefone.value = ""
        assunto.value = ""
        mensagem.value = ""
    }

    if (mensagem.value.length > 300) {
        alert("Há mais caracteres que o permetido no campo Mensagem!")
    }
}

/* Modifica os numeros do telefone para ficar bonito */
const inputTelefone = document.getElementById('in-telefone');

inputTelefone.addEventListener('input', () => {

    let valor = inputTelefone.value;

    valor = valor.replace(/\D/g, '');

    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');

    valor = valor.replace(/(\d{5})(\d)/, '$1-$2');

    inputTelefone.value = valor;

});

/* Verifica se o input mensagem tem mais de 300 caracteres */

const inputMensagem = document.getElementById("area-mensagem")
const paragrafo = document.getElementById("p-atencao")

inputMensagem.addEventListener("input", () => {
    if (inputMensagem.value.length > 300) {
        paragrafo.style.color = "red"
    } else {
        paragrafo.style.color = "black"
    }

})