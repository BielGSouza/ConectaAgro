import React, { useState } from 'react';
import '../css/fontes.css'
import '../css/root.css'
import '../css/extras.css'
import '../css/calagem.css'

// Método da saturação por bases:
// NC (t/ha) = CTC x (V desejada - V atual) / PRNT, corrigido pela profundidade (base de 20 cm)
const CalculadoraCalagem = () => {
    const [ctc, setCtc] = useState('');
    const [vAtual, setVAtual] = useState('');
    const [vDesejada, setVDesejada] = useState('');
    const [prnt, setPrnt] = useState('');
    const [profundidade, setProfundidade] = useState('20');
    const [area, setArea] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcular = () => {
        const t = parseFloat(ctc);
        const v1 = parseFloat(vAtual);
        const v2 = parseFloat(vDesejada);
        const p = parseFloat(prnt);
        const prof = parseFloat(profundidade);
        const ha = parseFloat(area);

        if ([t, v1, v2, p, prof, ha].some((n) => isNaN(n))) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        if (t <= 0 || p <= 0 || p > 100 || prof <= 0 || ha <= 0 || v1 < 0 || v2 > 100) {
            alert('Por favor, insira valores válidos (PRNT entre 1 e 100%, saturação entre 0 e 100%).');
            return;
        }

        if (v2 <= v1) {
            setResultado({ semNecessidade: true });
            return;
        }

        const porHectare = ((t * (v2 - v1)) / p) * (prof / 20);
        const total = porHectare * ha;
        const formato = { minimumFractionDigits: 2, maximumFractionDigits: 2 };

        setResultado({
            semNecessidade: false,
            porHectare: porHectare.toLocaleString('pt-BR', formato),
            total: total.toLocaleString('pt-BR', formato),
            sacos: Math.ceil((total * 1000) / 50).toLocaleString('pt-BR'),
        });
    };

    return (
        <section id="calculadora-calagem">
            <div className="titulo-calagem">
                <h2 className="Exo-2 fw-bold fst-italic">Calculadora de Calagem</h2>
                <p className="paragrafo">Descubra quanto calcário aplicar para corrigir a acidez do solo da sua lavoura.</p>
            </div>

            <div className="calc-form">
                <div className="calc-grupo">
                    <label htmlFor="calagem-ctc">CTC a pH 7 (cmolc/dm³)</label>
                    <input id="calagem-ctc" type="number" placeholder="Ex: 8" min="0" step="0.1"
                        value={ctc} onChange={(e) => setCtc(e.target.value)} />
                </div>
                <div className="calc-grupo">
                    <label htmlFor="calagem-prnt">PRNT do calcário (%)</label>
                    <input id="calagem-prnt" type="number" placeholder="Ex: 80" min="1" max="100"
                        value={prnt} onChange={(e) => setPrnt(e.target.value)} />
                </div>
                <div className="calc-grupo">
                    <label htmlFor="calagem-v1">Saturação por bases atual (V%)</label>
                    <input id="calagem-v1" type="number" placeholder="Ex: 40" min="0" max="100"
                        value={vAtual} onChange={(e) => setVAtual(e.target.value)} />
                </div>
                <div className="calc-grupo">
                    <label htmlFor="calagem-v2">Saturação desejada (V%)</label>
                    <input id="calagem-v2" type="number" placeholder="Ex: 60" min="0" max="100"
                        value={vDesejada} onChange={(e) => setVDesejada(e.target.value)} />
                </div>
                <div className="calc-grupo">
                    <label htmlFor="calagem-prof">Profundidade (cm)</label>
                    <input id="calagem-prof" type="number" placeholder="Ex: 20" min="1"
                        value={profundidade} onChange={(e) => setProfundidade(e.target.value)} />
                </div>
                <div className="calc-grupo">
                    <label htmlFor="calagem-area">Área (ha)</label>
                    <input id="calagem-area" type="number" placeholder="Ex: 50" min="0.1" step="0.1"
                        value={area} onChange={(e) => setArea(e.target.value)} />
                </div>

                <div className="calc-btn-row">
                    <button className="btn-calcular" onClick={calcular}>Calcular Calagem</button>
                </div>

                {resultado && (
                    <div id="resultado-calagem" className="ativo">
                        {resultado.semNecessidade ? (
                            <div className="resultado-item">
                                <strong>Sem necessidade</strong>
                                <span>A saturação atual já alcança a desejada</span>
                            </div>
                        ) : (
                            <>
                                <div className="resultado-item">
                                    <strong>{resultado.porHectare} t/ha</strong>
                                    <span>Calcário por hectare</span>
                                </div>
                                <div className="resultado-item">
                                    <strong>{resultado.total} t</strong>
                                    <span>Total para a área</span>
                                </div>
                                <div className="resultado-item">
                                    <strong>{resultado.sacos}</strong>
                                    <span>Sacos de 50 kg</span>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
            <p className="paragrafo" style={{ fontSize: '12px', opacity: 0.6, textAlign: 'center', maxWidth: '600px' }}>
                * Estimativa pelo método da saturação por bases. Confirme a recomendação com a análise de solo e um engenheiro agrônomo.
            </p>
        </section>
    );
};

export default CalculadoraCalagem;
