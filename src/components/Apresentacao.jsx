import React from 'react';
import '../css/style.css'
import '../css/fontes.css'
import '../css/root.css'
import '../css/extras.css'

// Imagens da seção "Quem Somos"
import FotoPrincipal from '../assets/sectionQuemSomos/photoPrincipal.png';
import FotoMudaPlantacao from '../assets/sectionQuemSomos/photoSecundaria.png';

// Imagens da seção "Público Alvo"
import AgricultorSorrindo from '../assets/sectionPublicoAlvo/agricultorSorrindo.png';
import DoisAgricultores from '../assets/sectionPublicoAlvo/doisAgricultores.png';
import AgricultorColhendo from '../assets/sectionPublicoAlvo/agricultorColhendo.png';

const Apresentacao = () => {
    return (
        <main style={{ display: 'block' }}>
            <section id="initial">
                <div id="title">
                    <h1 className="mb-0 fonte-conecta Exo-2 fw-bold titulo-conecta">Conecta</h1>
                    <h2 className="mb-0 fonte-agro Exo-2 fw-semibold fst-italic titulo-agro">Agro</h2>
                    <p className="mb-0 paragrafo text-white" id="title-p">Ligando você ao melhor do mercado.</p>
                </div>
                <div className="div-img-initial"></div>
            </section>

            <section id="quem-somos">
                <div className="text-titulo">
                    <div>
                        <h2 className="Exo-2 titulos-apresentação fw-bold fst-italic mb-0" id="txt-quem">Quem</h2>
                        <h2 className="Exo-2 titulos-apresentação fw-bold fst-italic mb-0" id="txt-somos">Somos?</h2>
                    </div>
                    <p className="paragrafo mb-0">A ConectaAgro é uma empresa criada para impulsionar a evolução da agricultura
                        brasileira por meio da inovação e da tecnologia. Trabalhamos conectando produtores, empresas e
                        oportunidades em uma única plataforma, criando um ambiente moderno, acessível e preparado para
                        atender às necessidades do agronegócio atual. Nosso compromisso é contribuir para um agro mais
                        forte, conectado e eficiente.</p>
                </div>
                <div id="div-imagens-quem-somos">
                    <img
                        src={FotoMudaPlantacao}
                        alt="Foto de uma planta na terra"
                        id="ft-secundaria-one"
                        width="40%"
                        style={{ zIndex: 1 }}
                    />
                    <img
                        src={FotoPrincipal}
                        width="70%"
                        alt="Foto de um canteiro de uma plantação"
                    />
                    <img
                        src={FotoMudaPlantacao}
                        alt="Foto de uma planta na terra"
                        width="40%"
                        id="ft-secundaria-two"
                    />
                </div>
            </section>

            <section id="nosso-proposito">
                <h2 className="Exo-2 titulos-apresentação fw-bold fst-italic mb-0" id="txt-nosso">Nosso</h2>
                <h2 className="Exo-2 titulos-apresentação fw-bold fst-italic mb-0" id="txt-proposito">Proposito</h2>
                <p className="paragrafo mb-0 paragrafo-nosso-proposito">Nosso propósito é transformar a maneira como o
                    agronegócio se conecta e cresce no Brasil. Buscamos facilitar o acesso à informação, oportunidades e soluções inovadoras, promovendo
                    desenvolvimento, colaboração e crescimento sustentável para todos que fazem parte do setor agrícola.
                </p>
            </section>

            <section id="publico-alvo">
                <div id="title-publico-alvo">
                    <h2 className="Exo-2 titulos-apresentação fw-bold fst-italic mb-0" id="txt-publico">Publico</h2>
                    <h2 className="Exo-2 titulos-apresentação fw-bold fst-italic mb-0" id="txt-alvo">Alvo</h2>
                </div>
                <div id="imgs-publico-alvo">
                    <img
                        src={AgricultorSorrindo}
                        alt="Agricultor sorrindo"
                        style={{ position: 'absolute', top: '0px', right: '10%', zIndex: 1 }}
                        width="11%"
                    />
                    <img
                        src={DoisAgricultores}
                        alt="Dois agricultores"
                        style={{ position: 'absolute', left: '15%' }}
                        width="30%"
                    />
                    <img
                        src={AgricultorColhendo}
                        alt="Agricultor colhendo"
                        style={{ zIndex: 2 }}
                        width="35%"
                    />
                    <img
                        src={DoisAgricultores}
                        alt="Dois agricultores"
                        style={{ position: 'absolute', right: '15%' }}
                        width="30%"
                    />
                    <img
                        src={AgricultorSorrindo}
                        alt="Agricultor sorrindo"
                        style={{ position: 'absolute', bottom: '0px', left: '10%' }}
                        width="11%"
                    />
                </div>
                <div id="div-p-publico-alvo">
                    <p className="paragrafo mb-0">
                        A ConectaAgro foi desenvolvida para produtores rurais, empresas do agronegócio, investidores e
                        profissionais que desejam acompanhar a modernização do mercado agrícola. Atendemos pessoas e
                        negócios que procuram inovação, novas conexões e oportunidades para expandir sua atuação no
                        setor.
                    </p>
                </div>
            </section>

            <section id="beneficios">
                <h2 className="Exo-2 titulo-beneficios fw-bold fst-italic mb-0" id="txt-beneficios">Beneficios</h2>
                <div id="dad-card">
                    <div className="card-personalizado">
                        <div className="card1">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.05 44.6501C15.45 44.6501 14.0333 44.1751 12.8 43.2251C11.5667 42.2751 10.7 41.0501 10.2 39.5501C9.66665 40.4168 9.01665 41.0918 8.24999 41.5751C7.48332 42.0584 6.56665 42.3001 5.49999 42.3001C3.93332 42.3001 2.63332 41.7501 1.59999 40.6501C0.566655 39.5501 0.0499878 38.2501 0.0499878 36.7501C0.0499878 35.1168 0.558321 33.8251 1.57499 32.8751C2.59165 31.9251 3.88332 31.4334 5.44999 31.4001C4.84999 30.7334 4.38332 29.9584 4.04999 29.0751C3.71665 28.1918 3.54999 27.3001 3.54999 26.4001C3.54999 25.1334 3.87499 23.9501 4.52499 22.8501C5.17499 21.7501 6.09999 20.8668 7.29999 20.2001C7.46665 20.6334 7.67499 21.1001 7.92499 21.6001C8.17499 22.1001 8.43332 22.5334 8.69999 22.9001C8.03332 23.3334 7.50832 23.8668 7.12499 24.5001C6.74165 25.1334 6.54999 25.8001 6.54999 26.5001C6.54999 28.5001 7.35832 29.7584 8.97499 30.2751C10.5917 30.7918 12.15 31.2001 13.65 31.5001L14.2 32.4501C13.8 33.6168 13.475 34.5751 13.225 35.3251C12.975 36.0751 12.85 36.7668 12.85 37.4001C12.85 38.5334 13.275 39.5251 14.125 40.3751C14.975 41.2251 15.9667 41.6501 17.1 41.6501C18.4667 41.6501 19.5917 41.0751 20.475 39.9251C21.3583 38.7751 22.075 37.4084 22.625 35.8251C23.175 34.2418 23.6 32.6418 23.9 31.0251C24.2 29.4084 24.45 28.1501 24.65 27.2501L27.55 28.0501C27.25 29.4834 26.9 31.1501 26.5 33.0501C26.1 34.9501 25.525 36.7584 24.775 38.4751C24.025 40.1918 23.0417 41.6501 21.825 42.8501C20.6083 44.0501 19.0167 44.6501 17.05 44.6501ZM5.54999 39.3001C6.24999 39.3001 6.84165 39.0584 7.32499 38.5751C7.80832 38.0918 8.04999 37.5001 8.04999 36.8001C8.04999 36.1001 7.80832 35.5084 7.32499 35.0251C6.84165 34.5418 6.24999 34.3001 5.54999 34.3001C4.84999 34.3001 4.25832 34.5418 3.77499 35.0251C3.29165 35.5084 3.04999 36.1001 3.04999 36.8001C3.04999 37.5001 3.29165 38.0918 3.77499 38.5751C4.25832 39.0584 4.84999 39.3001 5.54999 39.3001ZM20.55 29.8001C19.05 28.4668 17.6833 27.2251 16.45 26.0751C15.2167 24.9251 14.1583 23.8001 13.275 22.7001C12.3917 21.6001 11.7083 20.5168 11.225 19.4501C10.7417 18.3834 10.5 17.2501 10.5 16.0501C10.5 14.0501 11.2 12.3501 12.6 10.9501C14 9.5501 15.7 8.8501 17.7 8.8501C18 8.8501 18.2833 8.85843 18.55 8.8751C18.8167 8.89176 19.0833 8.93343 19.35 9.0001C19.05 8.43343 18.8333 7.9501 18.7 7.5501C18.5667 7.1501 18.5 6.7501 18.5 6.3501C18.5 4.81676 19.0333 3.51676 20.1 2.4501C21.1667 1.38343 22.4667 0.850098 24 0.850098C25.5333 0.850098 26.8333 1.38343 27.9 2.4501C28.9667 3.51676 29.5 4.81676 29.5 6.3501C29.5 6.71676 29.4417 7.10843 29.325 7.5251C29.2083 7.94176 28.9833 8.43343 28.65 9.0001C28.9167 8.93343 29.1833 8.89176 29.45 8.8751C29.7167 8.85843 30 8.8501 30.3 8.8501C32.2 8.8501 33.8083 9.45843 35.125 10.6751C36.4417 11.8918 37.2 13.4001 37.4 15.2001C36.9333 15.1668 36.4333 15.1584 35.9 15.1751C35.3667 15.1918 34.8667 15.2334 34.4 15.3001C34.2333 14.3001 33.7833 13.4751 33.05 12.8251C32.3167 12.1751 31.4 11.8501 30.3 11.8501C29.0667 11.8501 28.0917 12.1918 27.375 12.8751C26.6583 13.5584 25.7 14.6001 24.5 16.0001H23.45C22.2167 14.5334 21.2417 13.4751 20.525 12.8251C19.8083 12.1751 18.8667 11.8501 17.7 11.8501C16.5 11.8501 15.5 12.2501 14.7 13.0501C13.9 13.8501 13.5 14.8501 13.5 16.0501C13.5 16.8501 13.7167 17.6668 14.15 18.5001C14.5833 19.3334 15.2 20.2251 16 21.1751C16.8 22.1251 17.7667 23.1251 18.9 24.1751C20.0333 25.2251 21.3 26.3834 22.7 27.6501L20.55 29.8001ZM25.775 8.1251C26.2583 7.64177 26.5 7.0501 26.5 6.3501C26.5 5.6501 26.2583 5.05843 25.775 4.5751C25.2917 4.09176 24.7 3.8501 24 3.8501C23.3 3.8501 22.7083 4.09176 22.225 4.5751C21.7417 5.05843 21.5 5.6501 21.5 6.3501C21.5 7.0501 21.7417 7.64177 22.225 8.1251C22.7083 8.60843 23.3 8.8501 24 8.8501C24.7 8.8501 25.2917 8.60843 25.775 8.1251ZM30.9 44.7001C30.1667 44.7001 29.4417 44.5834 28.725 44.3501C28.0083 44.1168 27.3167 43.7668 26.65 43.3001C26.9167 42.9001 27.1833 42.4501 27.45 41.9501C27.7167 41.4501 27.9333 40.9834 28.1 40.5501C28.5667 40.9168 29.0417 41.1918 29.525 41.3751C30.0083 41.5584 30.5 41.6501 31 41.6501C32.1667 41.6501 33.1583 41.2251 33.975 40.3751C34.7917 39.5251 35.2 38.5334 35.2 37.4001C35.2 36.7334 35.0667 36.0251 34.8 35.2751C34.5333 34.5251 34.2167 33.5834 33.85 32.4501L34.4 31.5001C35.9333 31.2334 37.5 30.8418 39.1 30.3251C40.7 29.8084 41.5 28.5501 41.5 26.5501C41.5 25.0834 40.9667 23.9918 39.9 23.2751C38.8333 22.5584 37.65 22.2001 36.35 22.2001C34.95 22.2001 33.2917 22.4668 31.375 23.0001C29.4583 23.5334 27.2333 24.2168 24.7 25.0501L23.95 22.1501C26.4833 21.3168 28.7667 20.6168 30.8 20.0501C32.8333 19.4834 34.6833 19.2001 36.35 19.2001C38.4833 19.2001 40.375 19.8418 42.025 21.1251C43.675 22.4084 44.5 24.2001 44.5 26.5001C44.5 27.4001 44.3333 28.2834 44 29.1501C43.6667 30.0168 43.2 30.7834 42.6 31.4501C44.1333 31.4834 45.4167 31.9834 46.45 32.9501C47.4833 33.9168 48 35.2001 48 36.8001C48 38.3001 47.4833 39.6001 46.45 40.7001C45.4167 41.8001 44.1167 42.3501 42.55 42.3501C41.5167 42.3501 40.6 42.1084 39.8 41.6251C39 41.1418 38.35 40.4668 37.85 39.6001C37.3167 41.1001 36.4333 42.3251 35.2 43.2751C33.9667 44.2251 32.5333 44.7001 30.9 44.7001ZM44.275 38.6251C44.7583 38.1418 45 37.5501 45 36.8501C45 36.1834 44.75 35.5918 44.25 35.0751C43.75 34.5584 43.1667 34.3001 42.5 34.3001C41.8333 34.3001 41.25 34.5501 40.75 35.0501C40.25 35.5501 40 36.1334 40 36.8001C40 37.4668 40.2583 38.0584 40.775 38.5751C41.2917 39.0918 41.8833 39.3501 42.55 39.3501C43.2167 39.3501 43.7917 39.1084 44.275 38.6251Z"
                                    fill="#F1E9DC" />
                            </svg>

                            <h2 className="titulo-card mb-0">CONEXÃO</h2>
                            <p className="mb-0 paragrafo paragrafo-card">
                                Com a ConectaAgro você consegue se conectar com outros produtores de regiões distantes
                                ou proximas. E buscar soluções para o seu negócio com outros produtores, além de buscar menores
                                preços de produtos e maquinários.
                            </p>
                        </div>
                    </div>
                    <div className="card-personalizado">
                        <div className="card2">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.75 44L25.25 38.5H23.25C18.4833 38.5 14.4167 36.8167 11.05 33.45C7.68333 30.0833 6 26.0167 6 21.25C6 16.4833 7.69167 12.4167 11.075 9.05C14.4583 5.68333 18.55 4 23.35 4C25.7167 4 27.9083 4.425 29.925 5.275C31.9417 6.125 33.7 7.31667 35.2 8.85C36.7 10.3833 37.875 12.1917 38.725 14.275C39.575 16.3583 40 18.6333 40 21.1C40 23.3 39.675 25.5 39.025 27.7C38.375 29.9 37.4333 32 36.2 34C34.9667 36 33.4667 37.85 31.7 39.55C29.9333 41.25 27.95 42.7333 25.75 44ZM28.25 38.6C30.9833 36.3 33.125 33.5917 34.675 30.475C36.225 27.3583 37 24.2333 37 21.1C37 16.9667 35.7083 13.5833 33.125 10.95C30.5417 8.31667 27.2833 7 23.35 7C19.35 7 15.9583 8.39167 13.175 11.175C10.3917 13.9583 9 17.3167 9 21.25C9 25.1833 10.3917 28.5417 13.175 31.325C15.9583 34.1083 19.3167 35.5 23.25 35.5H28.25V38.6ZM24.7 32.3C25.0667 31.9333 25.25 31.4833 25.25 30.95C25.25 30.4167 25.0667 29.9667 24.7 29.6C24.3333 29.2333 23.8833 29.05 23.35 29.05C22.8167 29.05 22.3667 29.2333 22 29.6C21.6333 29.9667 21.45 30.4167 21.45 30.95C21.45 31.4833 21.6333 31.9333 22 32.3C22.3667 32.6667 22.8167 32.85 23.35 32.85C23.8833 32.85 24.3333 32.6667 24.7 32.3ZM22 26.05H24.5C24.5 25.2167 24.6417 24.525 24.925 23.975C25.2083 23.425 25.8 22.7 26.7 21.8C27.6 20.9 28.2333 20.075 28.6 19.325C28.9667 18.575 29.15 17.7667 29.15 16.9C29.15 15.4 28.6417 14.1667 27.625 13.2C26.6083 12.2333 25.25 11.75 23.55 11.75C22.15 11.75 20.9 12.1167 19.8 12.85C18.7 13.5833 17.8833 14.5833 17.35 15.85L19.65 16.8C20.0167 15.9333 20.525 15.2917 21.175 14.875C21.825 14.4583 22.5667 14.25 23.4 14.25C24.4 14.25 25.1833 14.4917 25.75 14.975C26.3167 15.4583 26.6 16.1 26.6 16.9C26.6 17.5333 26.4167 18.175 26.05 18.825C25.6833 19.475 25.0333 20.2833 24.1 21.25C23.2 22.1833 22.625 22.9333 22.375 23.5C22.125 24.0667 22 24.9167 22 26.05Z"
                                    fill="#F1E9DC" />
                            </svg>

                            <h2 className="titulo-card mb-0">SUPORTE</h2>
                            <p className="mb-0 paragrafo paragrafo-card">
                                Obtenha suporte para tirar suas dúvidas com outros produtores, compartilhar experiências,
                                aprender novas técnicas e buscar conhecimento através das postagens feitas na rede exclusiva
                                da ConectaAgro para crescer.
                            </p>
                        </div>
                    </div>
                    <div className="card-personalizado">
                        <div className="card1">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.55 27.8C1.68333 26.3667 1.04167 24.925 0.625 23.475C0.208333 22.025 0 20.6 0 19.2C0 15.5333 1.28333 12.4167 3.85 9.85C6.41667 7.28333 9.53333 6 13.2 6C15.3 6 17.2917 6.43333 19.175 7.3C21.0583 8.16667 22.6667 9.35 24 10.85C25.3333 9.35 26.9417 8.16667 28.825 7.3C30.7083 6.43333 32.7 6 34.8 6C38.4667 6 41.5833 7.28333 44.15 9.85C46.7167 12.4167 48 15.5333 48 19.2C48 20.6 47.7917 22.0167 47.375 23.45C46.9583 24.8833 46.3167 26.3167 45.45 27.75C45.1167 27.35 44.7417 27.0083 44.325 26.725C43.9083 26.4417 43.4667 26.2 43 26C43.6667 24.8333 44.1667 23.6833 44.5 22.55C44.8333 21.4167 45 20.3 45 19.2C45 16.3667 44.0083 13.9583 42.025 11.975C40.0417 9.99167 37.6333 9 34.8 9C32.9667 9 31.1583 9.54167 29.375 10.625C27.5917 11.7083 25.8 13.35 24 15.55C22.2 13.35 20.4083 11.7083 18.625 10.625C16.8417 9.54167 15.0333 9 13.2 9C10.3667 9 7.95833 9.99167 5.975 11.975C3.99167 13.9583 3 16.3667 3 19.2C3 20.3 3.16667 21.4167 3.5 22.55C3.83333 23.6833 4.33333 24.8333 5 26C4.53333 26.2 4.09167 26.45 3.675 26.75C3.25833 27.05 2.88333 27.4 2.55 27.8ZM0 44V41.35C0 40.05 0.7 39 2.1 38.2C3.5 37.4 5.3 37 7.5 37C7.93333 37 8.33333 37.0083 8.7 37.025C9.06667 37.0417 9.43333 37.0833 9.8 37.15C9.53333 37.7167 9.33333 38.2917 9.2 38.875C9.06667 39.4583 9 40.0833 9 40.75V44H0ZM12 44V40.75C12 38.5833 13.1083 36.8333 15.325 35.5C17.5417 34.1667 20.4333 33.5 24 33.5C27.6 33.5 30.5 34.1667 32.7 35.5C34.9 36.8333 36 38.5833 36 40.75V44H12ZM39 44V40.75C39 40.0833 38.9417 39.4583 38.825 38.875C38.7083 38.2917 38.5167 37.7167 38.25 37.15C38.6167 37.0833 38.9833 37.0417 39.35 37.025C39.7167 37.0083 40.1 37 40.5 37C42.7333 37 44.5417 37.4 45.925 38.2C47.3083 39 48 40.05 48 41.35V44H39ZM24 36.5C21.3333 36.5 19.1667 36.9 17.5 37.7C15.8333 38.5 15 39.5167 15 40.75V41H33V40.7C33 39.5 32.175 38.5 30.525 37.7C28.875 36.9 26.7 36.5 24 36.5ZM7.5 35.5C6.53333 35.5 5.70833 35.1583 5.025 34.475C4.34167 33.7917 4 32.9667 4 32C4 31.0333 4.34167 30.2083 5.025 29.525C5.70833 28.8417 6.53333 28.5 7.5 28.5C8.46667 28.5 9.29167 28.8417 9.975 29.525C10.6583 30.2083 11 31.0333 11 32C11 32.9667 10.6583 33.7917 9.975 34.475C9.29167 35.1583 8.46667 35.5 7.5 35.5ZM40.5 35.5C39.5333 35.5 38.7083 35.1583 38.025 34.475C37.3417 33.7917 37 32.9667 37 32C37 31.0333 37.3417 30.2083 38.025 29.525C38.7083 28.8417 39.5333 28.5 40.5 28.5C41.4667 28.5 42.2917 28.8417 42.975 29.525C43.6583 30.2083 44 31.0333 44 32C44 32.9667 43.6583 33.7917 42.975 34.475C42.2917 35.1583 41.4667 35.5 40.5 35.5ZM24 32C22.3333 32 20.9167 31.4167 19.75 30.25C18.5833 29.0833 18 27.6667 18 26C18 24.3 18.5833 22.875 19.75 21.725C20.9167 20.575 22.3333 20 24 20C25.7 20 27.125 20.575 28.275 21.725C29.425 22.875 30 24.3 30 26C30 27.6667 29.425 29.0833 28.275 30.25C27.125 31.4167 25.7 32 24 32ZM24 23C23.1667 23 22.4583 23.2833 21.875 23.85C21.2917 24.4167 21 25.1333 21 26C21 26.8333 21.2917 27.5417 21.875 28.125C22.4583 28.7083 23.1667 29 24 29C24.8667 29 25.5833 28.7083 26.15 28.125C26.7167 27.5417 27 26.8333 27 26C27 25.1333 26.7167 24.4167 26.15 23.85C25.5833 23.2833 24.8667 23 24 23Z"
                                    fill="#F1E9DC" />
                            </svg>

                            <h2 className="titulo-card mb-0">INCLUSÃO</h2>
                            <p className="mb-0 paragrafo paragrafo-card">
                                Na nossa comunidade você produtor rural que tem dificil acesso a outros produtores se
                                sente incluso dentro do mercado e no ambiente da agricultura.
                            </p>
                        </div>
                    </div>
                    <div className="card-personalizado">
                        <div className="card2">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 42C8.2 42 7.5 41.7 6.9 41.1C6.3 40.5 6 39.8 6 39V9C6 8.2 6.3 7.5 6.9 6.9C7.5 6.3 8.2 6 9 6H32.1L42 15.9V39C42 39.8 41.7 40.5 41.1 41.1C40.5 41.7 39.8 42 39 42H9ZM9 39H39V17.5715H30.45V9H9V39ZM13.95 33.45H34.05V30.45H13.95V33.45ZM13.95 17.55H24V14.55H13.95V17.55ZM13.95 25.5H34.05V22.5H13.95V25.5Z"
                                    fill="#F1E9DC" />
                            </svg>
                            <h2 className="titulo-card mb-0">INOVAÇÃO</h2>
                            <p className="mb-0 paragrafo paragrafo-card">
                                Fique por dentro das mais novas novidades do mercado e no mundo, tenha na palma da sua
                                mão previsões para colheita e plantação, além de variações que acontece no mercado.
                            </p>
                        </div>
                    </div>
                </div>
                <p className="mb-0 paragrafo">
                    A ConectaAgro oferece uma série de benefícios, incluindo acesso a uma ampla rede de contatos,
                    oportunidades de negócios, informações atualizadas sobre o mercado agrícola, ferramentas de gestão e suporte para
                    impulsionar o crescimento e a inovação no setor.
                </p>
            </section>
        </main>
    );
};

export default Apresentacao;