/* =============================================
   CALCULADORA-SAFRA.JS - Calculadora de Estimativa de Safra
   ============================================= */

function calcularSafra() {
    const cultura = document.getElementById('calc-cultura').value;
    const area = parseFloat(document.getElementById('calc-area').value);
    const produtividade = parseFloat(document.getElementById('calc-produtividade').value);
    const precoMercado = parseFloat(document.getElementById('calc-preco').value);

    if (!cultura || isNaN(area) || isNaN(produtividade) || isNaN(precoMercado)) {
        mostrarToast('Preencha todos os campos da calculadora!', 'erro');
        return;
    }

    if (area <= 0 || produtividade <= 0 || precoMercado <= 0) {
        mostrarToast('Os valores devem ser maiores que zero.', 'erro');
        return;
    }

    // Cálculos
    const totalSacas = area * produtividade;
    const totalKg = totalSacas * 60; // 1 saca = 60kg (padrão grãos)
    const receitaBruta = totalSacas * precoMercado;

    // Custos estimados por cultura (R$/ha)
    const custosRef = {
        soja:    2200,
        milho:   3100,
        trigo:   1800,
        cafe:    4500,
        algodao: 5000,
        cana:    2600,
        arroz:   2000,
        feijao:  1500
    };

    const custoHa = custosRef[cultura] || 2000;
    const custoTotal = custoHa * area;
    const lucroEstimado = receitaBruta - custoTotal;

    // Exibir resultado
    const resultado = document.getElementById('resultado-calc');
    resultado.classList.add('ativo');

    document.getElementById('res-sacas').textContent = totalSacas.toLocaleString('pt-BR') + ' sc';
    document.getElementById('res-kg').textContent = (totalKg / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' t';
    document.getElementById('res-receita').textContent = 'R$ ' + receitaBruta.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    document.getElementById('res-lucro').textContent = 'R$ ' + lucroEstimado.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    document.getElementById('res-lucro').style.color = lucroEstimado >= 0 ? '#A5D6A7' : '#ff8a80';

    mostrarToast('Estimativa calculada com sucesso! ✅', 'sucesso');

    // Scroll suave até o resultado
    resultado.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Expor globalmente
window.calcularSafra = calcularSafra;
