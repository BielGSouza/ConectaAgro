import React, { useState } from 'react';
import '../css/fontes.css'
import '../css/root.css'
import '../css/extras.css'

const ClimaAgricola = () => {
    // Estados para a funcionalidade de clima
    const [climaData, setClimaData] = useState(null);
    const [cidadeClima, setCidadeClima] = useState('');

    // Função para buscar clima (simulada - substitua pela API real)
    const buscarClima = () => {
        if (!cidadeClima.trim()) {
            alert('Por favor, digite o nome de uma cidade.');
            return;
        }

        // Simulação de dados climáticos - substitua por chamada real à API
        const dadosSimulados = {
            nome: cidadeClima,
            data: new Date().toLocaleDateString('pt-BR'),
            temperatura: 28,
            descricao: 'Parcialmente nublado',
            icone: '⛅',
            umidade: 65,
            vento: '12 km/h',
            chuva: '0 mm',
            max: 32,
            min: 22,
            dica: '🌱 Bom momento para plantio. Solo com umidade adequada.'
        };

        setClimaData(dadosSimulados);
    };

    return (
            <section id="clima-agricola">
                <h2 className="Exo-2 fw-bold fst-italic">Clima Agrícola</h2>
                <p className="sub-clima paragrafo">Consulte as condições climáticas da sua região e receba dicas para sua lavoura.</p>
                <div className="clima-busca">
                    <input
                        id="input-cidade-clima"
                        type="text"
                        placeholder="Digite sua cidade (ex: Ribeirão Preto)"
                        value={cidadeClima}
                        onChange={(e) => setCidadeClima(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && buscarClima()}
                    />
                    <button onClick={buscarClima}>Consultar</button>
                </div>
                <div id="painel-clima" className='ativo'>
                    {climaData && (
                        <div className="clima-card">
                            <div className="clima-topo">
                                <div>
                                    <div className="clima-cidade" id="clima-nome-cidade">{climaData.nome}</div>
                                    <div className="clima-data" id="clima-data-hoje">{climaData.data}</div>
                                </div>
                            </div>
                            <div className="clima-temp-wrap">
                                <div className="clima-icone" id="clima-icone">{climaData.icone}</div>
                                <div className="clima-temp" id="clima-temperatura">{climaData.temperatura}°C</div>
                            </div>
                            <div className="clima-desc" id="clima-descricao">{climaData.descricao}</div>
                            <div className="clima-detalhes">
                                <div className="clima-detalhe-item">
                                    <span className="label">Umidade</span>
                                    <span className="valor" id="clima-umidade">{climaData.umidade}%</span>
                                </div>
                                <div className="clima-detalhe-item">
                                    <span className="label">Vento</span>
                                    <span className="valor" id="clima-vento">{climaData.vento}</span>
                                </div>
                                <div className="clima-detalhe-item">
                                    <span className="label">Chuva</span>
                                    <span className="valor" id="clima-chuva">{climaData.chuva}</span>
                                </div>
                                <div className="clima-detalhe-item">
                                    <span className="label">Máx.</span>
                                    <span className="valor" id="clima-max">{climaData.max}°C</span>
                                </div>
                                <div className="clima-detalhe-item">
                                    <span className="label">Mín.</span>
                                    <span className="valor" id="clima-min">{climaData.min}°C</span>
                                </div>
                            </div>
                            <div className="clima-agro-dica" id="clima-dica-texto">{climaData.dica}</div>
                        </div>
                    )}
                </div>
            </section>
    );
};

export default ClimaAgricola;
