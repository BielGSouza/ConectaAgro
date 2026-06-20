/* =============================================
   EXTRAS.JS - Funcionalidades Adicionais ConectaAgro
   ============================================= */

/* ---- BOTÃO VOLTAR AO TOPO ---- */
(function () {
    // Cria o botão dinamicamente
    const btn = document.createElement('button');
    btn.id = 'btn-voltar-topo';
    btn.setAttribute('aria-label', 'Voltar ao topo');
    btn.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12H9V20H15V12H20L12 4Z" fill="currentColor"/>
        </svg>
    `;
    document.body.appendChild(btn);

    // Mostra/esconde ao rolar
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visivel', window.scrollY > 300);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

/* ---- SISTEMA DE TOAST / NOTIFICAÇÕES ---- */
function mostrarToast(mensagem, tipo = 'sucesso') {
    // Remove toast anterior se existir
    const anterior = document.getElementById('toast-conecta');
    if (anterior) anterior.remove();

    const toast = document.createElement('div');
    toast.id = 'toast-conecta';
    toast.className = `toast-conecta toast-${tipo}`;

    const icones = {
        sucesso: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        erro: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 9V12M12 15H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    };

    toast.innerHTML = `
        <span class="toast-icone">${icones[tipo] || icones.info}</span>
        <span class="toast-texto">${mensagem}</span>
        <button class="toast-fechar" onclick="this.parentElement.remove()">×</button>
    `;

    document.body.appendChild(toast);

    // Animar entrada
    requestAnimationFrame(() => toast.classList.add('toast-ativo'));

    // Remover após 4 segundos
    setTimeout(() => {
        toast.classList.remove('toast-ativo');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

// Torna a função global
window.mostrarToast = mostrarToast;
