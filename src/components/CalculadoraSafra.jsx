import React, { useState } from 'react';
import '../css/fontes.css'
import '../css/root.css'
import '../css/extras.css'

const CalculadoraSafra = () => {
    // Estados para a calculadora de safra
    const [cultura, setCultura] = useState('');
    const [area, setArea] = useState('');
    const [produtividade, setProdutividade] = useState('');
    const [preco, setPreco] = useState('');
    const [resultado, setResultado] = useState(null);
    const [divResultado, setDivResultado] = useState(false);

    // Função para calcular safra
    const calcularSafra = () => {
        if (!cultura || !area || !produtividade || !preco) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const areaNum = parseFloat(area);
        const prodNum = parseFloat(produtividade);
        const precoNum = parseFloat(preco);

        if (isNaN(areaNum) || isNaN(prodNum) || isNaN(precoNum) || areaNum <= 0 || prodNum <= 0 || precoNum <= 0) {
            alert('Por favor, insira valores válidos.');
            return;
        }

        const producaoSacas = areaNum * prodNum;
        const producaoToneladas = (producaoSacas * 60) / 1000; // Considerando 60kg por saca
        const receitaBruta = producaoSacas * precoNum;

        // Simulação de custos por cultura (valores médios)
        const custos = {
            soja: 0.65,
            milho: 0.70,
            trigo: 0.60,
            cafe: 0.55,
            algodao: 0.50,
            cana: 0.75,
            arroz: 0.60,
            feijao: 0.55
        };

        const custoPercentual = custos[cultura] || 0.60;
        const lucroEstimado = receitaBruta * (1 - custoPercentual);

        setResultado({
            sacas: producaoSacas.toFixed(0),
            toneladas: producaoToneladas.toFixed(2),
            receita: `R$ ${receitaBruta.toFixed(2).replace('.', ',')}`,
            lucro: `R$ ${lucroEstimado.toFixed(2).replace('.', ',')}`
        });
        setDivResultado(true);
    };

    return (
            <section id="calculadora-safra">
                <div className="titulo-calc">
                    <h2 className="Exo-2 fw-bold fst-italic">Calculadora de Safra</h2>
                    <p className="paragrafo">Estime a produção e receita da sua safra de forma rápida e simples.</p>
                </div>
                <div className="calc-form">
                    <div className="calc-grupo">
                        <label htmlFor="calc-cultura">Cultura</label>
                        <select
                            id="calc-cultura"
                            value={cultura}
                            onChange={(e) => setCultura(e.target.value)}
                        >
                            <option value="">Selecione a cultura</option>
                            <option value="soja">Soja</option>
                            <option value="milho">Milho</option>
                            <option value="trigo">Trigo</option>
                            <option value="cafe">Café</option>
                            <option value="algodao">Algodão</option>
                            <option value="cana">Cana-de-açúcar</option>
                            <option value="arroz">Arroz</option>
                            <option value="feijao">Feijão</option>
                        </select>
                    </div>
                    <div className="calc-grupo">
                        <label htmlFor="calc-area">Área Plantada (ha)</label>
                        <input
                            type="number"
                            id="calc-area"
                            placeholder="Ex: 100"
                            min="0.1"
                            step="0.1"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                        />
                    </div>
                    <div className="calc-grupo">
                        <label htmlFor="calc-produtividade">Produtividade (sc/ha)</label>
                        <input
                            type="number"
                            id="calc-produtividade"
                            placeholder="Ex: 60"
                            min="1"
                            value={produtividade}
                            onChange={(e) => setProdutividade(e.target.value)}
                        />
                    </div>
                    <div className="calc-grupo">
                        <label htmlFor="calc-preco">Preço por Saca (R$)</label>
                        <input
                            type="number"
                            id="calc-preco"
                            placeholder="Ex: 130.00"
                            min="0.01"
                            step="0.01"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                        />
                    </div>
                    <div className="calc-btn-row">
                        <button className="btn-calcular" onClick={calcularSafra}>Calcular Estimativa</button>
                    </div>
                    {resultado && (
                        <div id="resultado-calc" className="ativo">
                            <div className="resultado-item">
                                <strong id="res-sacas">{resultado.sacas}</strong>
                                <span>Produção Total</span>
                            </div>
                            <div className="resultado-item">
                                <strong id="res-kg">{resultado.toneladas}</strong>
                                <span>Em Toneladas</span>
                            </div>
                            <div className="resultado-item">
                                <strong id="res-receita">{resultado.receita}</strong>
                                <span>Receita Bruta</span>
                            </div>
                            <div className="resultado-item">
                                <strong id="res-lucro">{resultado.lucro}</strong>
                                <span>Lucro Estimado*</span>
                            </div>
                        </div>
                    )}
                </div>
                <p className="paragrafo" style={{ fontSize: '12px', opacity: 0.6, textAlign: 'center', maxWidth: '600px' }}>
                    * Estimativa baseada em custos médios de produção por cultura. Valores são orientativos e podem variar conforme a região e condições de mercado.
                </p>
            </section>
    );
};

export default CalculadoraSafra;
