import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../../css/fontes.css';
import '../../css/root.css';
import './CarrosselFuncionalidades.css';

import OrcamentoRural from '../OrcamentoRural/OrcamentoRural';
import SimuladorCredito from '../SimuladorCredito/SimuladorCredito';
import ConversorUnidades from '../ConversorUnidades';
import CalculadoraSafra from '../CalculadoraSafra';
import ClimaAgricola from '../ClimaAgricola';
import CalculadoraCalagem from '../CalculadoraCalagem';

/* ---------- Ícones (traço simples, herdam a cor do texto) ---------- */
const Icone = ({ children }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        {children}
    </svg>
);

const IconeOrcamento = () => (
    <Icone>
        <path d="M5 4h14v16l-2.5-1.5L14 20l-2-1.5L10 20l-2.5-1.5L5 20z" />
        <path d="M9 9h6M9 13h6" />
    </Icone>
);

const IconeCredito = () => (
    <Icone>
        <path d="M3 10 12 4l9 6" />
        <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
        <path d="M3 20h18" />
    </Icone>
);

const IconeConversor = () => (
    <Icone>
        <path d="M4 8h13l-3-3M20 16H7l3 3" />
    </Icone>
);

const IconeSafra = () => (
    <Icone>
        <path d="M12 21V9" />
        <path d="M12 9c0-3 2-5 5-5 0 3-2 5-5 5Z" />
        <path d="M12 13c0-3-2-5-5-5 0 3 2 5 5 5Z" />
        <path d="M12 17c0-2 1.5-3.5 4-3.5 0 2-1.5 3.5-4 3.5Z" />
    </Icone>
);

const IconeClima = () => (
    <Icone>
        <circle cx="9" cy="9" r="3" />
        <path d="M9 3v1.5M3 9h1.5M4.8 4.8l1 1M13.2 4.8l-1 1" />
        <path d="M8 19h9a3.5 3.5 0 0 0 .4-6.98A5 5 0 0 0 8 13.5 2.75 2.75 0 0 0 8 19Z" />
    </Icone>
);

const IconeCalagem = () => (
    <Icone>
        <path d="M3 8l9-4 9 4-9 4z" />
        <path d="M3 12l9 4 9-4" />
        <path d="M3 16l9 4 9-4" />
    </Icone>
);

const Chevron = ({ direcao }) => (
    <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d={direcao === 'esquerda' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </svg>
);

/* ---------- Funcionalidades exibidas no carousel ---------- */
const FUNCIONALIDADES = [
    { id: 'clima', rotulo: 'Clima Agrícola', Icone: IconeClima, Conteudo: ClimaAgricola },
    { id: 'orcamento', rotulo: 'Orçamento Rural', Icone: IconeOrcamento, Conteudo: OrcamentoRural },
    { id: 'credito', rotulo: 'Simulador de Crédito', Icone: IconeCredito, Conteudo: SimuladorCredito },
    { id: 'conversor', rotulo: 'Conversor de Unidades Agrárias', Icone: IconeConversor, Conteudo: ConversorUnidades },
    { id: 'safra', rotulo: 'Calculadora de Safra', Icone: IconeSafra, Conteudo: CalculadoraSafra },
    { id: 'calagem', rotulo: 'Calculadora de Calagem', Icone: IconeCalagem, Conteudo: CalculadoraCalagem },
];

const TOTAL = FUNCIONALIDADES.length;
const DISTANCIA_MINIMA_SWIPE = 60;

const CarrosselFuncionalidades = () => {
    const [atual, setAtual] = useState(0);
    const [altura, setAltura] = useState(null);

    const slideRefs = useRef([]);
    const abasRef = useRef(null);
    const abaRefs = useRef([]);
    const toque = useRef(null);

    // Navegação circular: depois da última volta para a primeira (e vice-versa)
    const irPara = useCallback((indice) => {
        setAtual(((indice % TOTAL) + TOTAL) % TOTAL);
    }, []);

    const anterior = () => irPara(atual - 1);
    const proximo = () => irPara(atual + 1);

    // A altura do carousel acompanha o slide ativo (cada ferramenta tem um tamanho)
    useEffect(() => {
        const slide = slideRefs.current[atual];
        if (!slide) return undefined;

        const medir = () => setAltura(slide.offsetHeight);
        medir();

        if (typeof ResizeObserver === 'undefined') return undefined;
        const observador = new ResizeObserver(medir);
        observador.observe(slide);
        return () => observador.disconnect();
    }, [atual]);

    // Mantém a aba ativa visível na barra (útil no celular, onde ela rola)
    useEffect(() => {
        const lista = abasRef.current;
        const aba = abaRefs.current[atual];
        if (!lista || !aba) return;
        const alvo = aba.offsetLeft - (lista.clientWidth - aba.clientWidth) / 2;
        lista.scrollTo({ left: Math.max(0, alvo), behavior: 'smooth' });
    }, [atual]);

    // Setas do teclado só nas abas (dentro dos formulários elas têm outra função)
    const aoTeclarNasAbas = (e) => {
        let destino = null;
        if (e.key === 'ArrowRight') destino = atual + 1;
        else if (e.key === 'ArrowLeft') destino = atual - 1;
        else if (e.key === 'Home') destino = 0;
        else if (e.key === 'End') destino = TOTAL - 1;
        if (destino === null) return;

        e.preventDefault();
        const indice = ((destino % TOTAL) + TOTAL) % TOTAL;
        irPara(indice);
        abaRefs.current[indice]?.focus();
    };

    // Deslizar com o dedo (ignora toques em campos de formulário)
    const aoComecarToque = (e) => {
        if (e.target.closest('input, select, textarea, label')) {
            toque.current = null;
            return;
        }
        const t = e.touches[0];
        toque.current = { x: t.clientX, y: t.clientY };
    };

    const aoTerminarToque = (e) => {
        if (!toque.current) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - toque.current.x;
        const dy = t.clientY - toque.current.y;
        toque.current = null;

        if (Math.abs(dx) > DISTANCIA_MINIMA_SWIPE && Math.abs(dx) > Math.abs(dy) * 1.5) {
            irPara(dx < 0 ? atual + 1 : atual - 1);
        }
    };

    return (
        <section
            id="funcionalidades"
            aria-roledescription="carousel"
            aria-label="Ferramentas da ConectaAgro"
        >
            <div className="cf-titulo">
                <h2 className="Exo-2 fw-bold fst-italic mb-0" id="txt-funcionalidades">Ferramenta</h2>
                <p className="paragrafo mb-0">
                    Ferramentas para planejar, calcular e acompanhar a sua produção, direto aqui na página.
                </p>
            </div>

            <div
                className="cf-abas"
                role="tablist"
                aria-label="Escolher funcionalidade"
                ref={abasRef}
                onKeyDown={aoTeclarNasAbas}
            >
                {FUNCIONALIDADES.map((f, i) => (
                    <button
                        key={f.id}
                        type="button"
                        role="tab"
                        id={`cf-aba-${f.id}`}
                        aria-controls={`cf-painel-${f.id}`}
                        aria-selected={i === atual}
                        tabIndex={i === atual ? 0 : -1}
                        className={`cf-aba${i === atual ? ' ativa' : ''}`}
                        ref={(el) => { abaRefs.current[i] = el; }}
                        onClick={() => irPara(i)}
                    >
                        <f.Icone />
                        <span>{f.rotulo}</span>
                    </button>
                ))}
            </div>

            <div className="cf-palco">
                <button
                    type="button"
                    className="cf-seta cf-seta-anterior"
                    onClick={anterior}
                    aria-label="Funcionalidade anterior"
                >
                    <Chevron direcao="esquerda" />
                </button>

                <div
                    className="cf-janela"
                    style={altura ? { height: altura } : undefined}
                    onTouchStart={aoComecarToque}
                    onTouchEnd={aoTerminarToque}
                >
                    <div
                        className="cf-trilho"
                        style={{ transform: `translateX(-${atual * 100}%)` }}
                    >
                        {FUNCIONALIDADES.map((f, i) => (
                            <div
                                key={f.id}
                                id={`cf-painel-${f.id}`}
                                role="tabpanel"
                                aria-labelledby={`cf-aba-${f.id}`}
                                aria-roledescription="slide"
                                className={`cf-slide${i === atual ? ' ativo' : ''}`}
                                ref={(el) => { slideRefs.current[i] = el; }}
                                aria-hidden={i !== atual}
                                inert={i !== atual}
                            >
                                <f.Conteudo />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="cf-seta cf-seta-proximo"
                    onClick={proximo}
                    aria-label="Próxima funcionalidade"
                >
                    <Chevron direcao="direita" />
                </button>

                <div className="cf-pontos" role="group" aria-label="Posição no carousel">
                    {FUNCIONALIDADES.map((f, i) => (
                        <button
                            key={f.id}
                            type="button"
                            className={`cf-ponto${i === atual ? ' ativo' : ''}`}
                            onClick={() => irPara(i)}
                            aria-label={`Ir para ${f.rotulo}`}
                            aria-current={i === atual ? 'true' : undefined}
                        />
                    ))}
                </div>
            </div>

            <p className="cf-status" aria-live="polite">
                {FUNCIONALIDADES[atual].rotulo}, {atual + 1} de {TOTAL}
            </p>
        </section>
    );
};

export default CarrosselFuncionalidades;
