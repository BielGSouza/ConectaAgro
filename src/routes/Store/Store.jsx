import React, { useState, useRef } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../../css/store.css';
import CarrinhoDeCompras from '../../components/CarrinhoDeCompras';

// Importações dos banners
import BannerUm from '../../assets/banners/banner_agricola_equipamentos(1).jpg';
import BannerDois from '../../assets/banners/banner_agricola_insumos(1).jpg';

// Importações da seção "card" (3 imagens)
import Ferramentas from '../../assets/sectionStore/photo-1573561368183-fd88bdb4503d 1.png';
import Maquinas from '../../assets/sectionStore/photo-1685335686020-e0b487f7f426 1.png';
import Insumos from '../../assets/sectionStore/premium_photo-1661964196891-3d3f378a97b2 1.png';

// Importação do ícone AgroHub (usado nos botões)
import IconeAgroHub from '../../assets/sectionStore/agrohub_tech_font_1-removebg-preview 2.svg';

// Importações das setas do carrossel
import Seta from '../../assets/sectionStore/arrow_forward_50dp_F1E9DC_FILL0_wght400_GRAD0_opsz48 2.svg';

// Importação dos vetores de linhas
import VetoresLinhas from '../../assets/vetores/vetoresLinhas.svg';

// Importações do sub-rodapé
import IconeCaixa from '../../assets/sectionStore/box_50dp_263238_FILL0_wght400_GRAD0_opsz48 1.svg';
import IconeCartao from '../../assets/sectionStore/credit_card_50dp_263238_FILL0_wght400_GRAD0_opsz48 1.svg';

// Importações dos produtos
import Enxada from '../../assets/produtos/enxada.jpg';
import SacoSilagem from '../../assets/produtos/saco-de-silagem.jpg';
import SementeUva from '../../assets/produtos/semente-uva.webp';
import SementeCalendula from '../../assets/produtos/semente-calendula.jpg';
import SementeOnzeHoras from '../../assets/produtos/semente-onze-horas.jpg';
import SementeCapuchinha from '../../assets/produtos/semente-capuchinha.jpg';

const Store = () => {
    // Referências para os carrosséis de produtos
    const carrosselRef = useRef(null);
    const carrosselRef2 = useRef(null);

    //Array com produtos (exemplo)
    const produtos = [
        {
            id: 1,
            nome: "Enxada com cabo de madeira",
            preco: 75.90,
            imagem: Enxada
        },
        {
            id: 2,
            nome: "Saco de cilagem",
            preco: 27.50,
            imagem: SacoSilagem
        },
        {
            id: 3,
            nome: "Semente de uva",
            preco: 32.49,
            imagem: SementeUva
        },
        {
            id: 4,
            nome: "Semente de Calêndula",
            preco: 75.90,
            imagem: SementeCalendula
        },
        {
            id: 5,
            nome: "Semente de Onze Horas",
            preco: 75.90,
            imagem: SementeOnzeHoras
        },
        {
            id: 6,
            nome: "Semente de Capuchinha",
            preco: 75.90,
            imagem: SementeCapuchinha
        },
    ]

    // Função para mover o carrossel de produtos
    const mover = (direcao) => {
        if (carrosselRef.current) {
            const scrollAmount = 300;
            const newScrollLeft = direcao === 'direita'
                ? carrosselRef.current.scrollLeft - scrollAmount
                : carrosselRef.current.scrollLeft + scrollAmount;

            carrosselRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    // Função para mover o segundo carrossel de produtos
    const moverTwo = (direcao) => {
        if (carrosselRef2.current) {
            const scrollAmount = 300;
            const newScrollLeft = direcao === 'direita'
                ? carrosselRef2.current.scrollLeft - scrollAmount
                : carrosselRef2.current.scrollLeft + scrollAmount;

            carrosselRef2.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const [produtosSelecionados, setProdutosSelecionados] = useState([]);

    const adicionarAoCarrinho = (produto) => {
        setProdutosSelecionados(prev => {
            // Verifica se o produto já está no carrinho
            const produtoExistente = prev.find(item => item.id === produto.id);

            if (produtoExistente) {
                // Se já existe, aumenta a quantidade
                return prev.map(item =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            } else {
                // Se não existe, adiciona com quantidade 1
                return [...prev, { ...produto, quantidade: 1 }];
            }
        });
    };

    return (
        <>
            <Header />
            <main style={{ display: 'block' }}>
                <section id="apresentacao">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src={BannerUm}
                                    className="d-block w-100"
                                    alt="Banner agrícola equipamentos"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={BannerDois}
                                    className="d-block w-100"
                                    alt="Banner agrícola insumos"
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>

                <section id="card">
                    <div className="card-store" id="card-store-one">
                        <img
                            className="img-card"
                            src={Ferramentas}
                            alt="Ferramentas agrícolas"
                            height="100%"
                        />
                        <div className="text-card">
                            <p className="paragrafo mb-0">FERRAMENTAS</p>
                            <button className="btn-card">
                                <img
                                    src={IconeAgroHub}
                                    alt="Ícone AgroHub"
                                />
                                CONFIRA
                            </button>
                        </div>
                    </div>

                    <div className="card-store" id="card-store-two">
                        <img
                            className="img-card"
                            src={Maquinas}
                            alt="Máquinas agrícolas"
                            height="100%"
                        />
                        <div className="text-card">
                            <p className="paragrafo mb-0">MÁQUINAS</p>
                            <button className="btn-card">
                                <img
                                    src={IconeAgroHub}
                                    alt="Ícone AgroHub"
                                />
                                CONFIRA
                            </button>
                        </div>
                    </div>

                    <div className="card-store" id="card-store-three">
                        <img
                            className="img-card"
                            src={Insumos}
                            alt="Insumos agrícolas"
                            height="100%"
                        />
                        <div className="text-card">
                            <p className="paragrafo mb-0">INSUMOS</p>
                            <button className="btn-card">
                                <img
                                    src={IconeAgroHub}
                                    alt="Ícone AgroHub"
                                />
                                <p className="paragrafo mb-0">CONFIRA</p>
                            </button>
                        </div>
                    </div>
                </section>

                <section id="melhores-ofertas">
                    <p className="subtitulo mb-0 text-white" style={{ zIndex: 1 }}>Melhores Ofertas</p>
                    <div id="linhas-produtos" style={{ zIndex: 1 }}>
                        <img
                            id="btn-direita"
                            className="setas-linha-produto"
                            src={Seta}
                            alt="Seta direita"
                            onClick={() => mover('direita')}
                        />
                        <div id="tela-rolavel-produtos" ref={carrosselRef}>
                            {produtos.map((produto, index) => (
                                <div
                                    className="card-produto"
                                    key={index}
                                >
                                    <img src={produto.imagem} alt="Enxada preta e afiada" />
                                    <p className="paragrafo mb-0 text-center">{produto.nome}</p>
                                    <p className="pagrafo mb-0 fw-medium">R$ {produto.preco.toFixed(2)}</p>

                                    <div className='add-carrinho' onClick={() => adicionarAoCarrinho(produto)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="M444-576v-132H312v-72h132v-132h72v132h132v72H516v132h-72ZM213-117.21q-21-21.21-21-51T213.21-219q21.21-21 51-21T315-218.79q21 21.21 21 51T314.79-117q-21.21 21-51 21T213-117.21Zm432 0q-21-21.21-21-51T645.21-219q21.21-21 51-21T747-218.79q21 21.21 21 51T746.79-117q-21.21 21-51 21T645-117.21ZM48-792v-72h133l155 360h301l113-264h78L703-476q-9 20-26.5 32T637-432H317l-42 72h493v72H276q-42 0-63-36.5t0-71.5l52-90-131-306H48Z" /></svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <img
                            id="btn-esquerda"
                            className="setas-linha-produto"
                            src={Seta}
                            alt="Seta esquerda"
                            style={{ transform: 'rotate(180deg)' }}
                            onClick={() => mover('esquerda')}
                        />
                    </div>
                    <img
                        src={VetoresLinhas}
                        alt="Vetores de linhas"
                        style={{ position: 'absolute', width: '100%', height: '61%' }}
                    />
                </section>

                <section id="produtos">
                    <div className="arte">Lugar para arte de ecommerce</div>
                    <p className="p-store" id="p-two">Produtos</p>
                    <div id="dad-lista-de-produtos">
                        <div id="lista-de-produtos">
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                            <div className="card-produto card-main" />
                        </div>
                    </div>
                    <p id="p-ver-todos" className="mb-0 paragrafo">Ver Todos</p>
                    <div className="arte">Lugar para arte de ecommerce</div>
                </section>

                <section id="para-voce">
                    <p className="p-store" style={{ zIndex: 1 }}>Produtos Para Você</p>
                    <div id="linhas-produtos" style={{ zIndex: 1 }}>
                        <img
                            id="btn-direita2"
                            className="setas-linha-produto"
                            src={Seta}
                            alt="Seta direita"
                            onClick={() => moverTwo('direita')}
                        />
                        <div id="tela-rolavel-produtos2" ref={carrosselRef2}>
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                            <div className="card-produto" />
                        </div>
                        <img
                            id="btn-esquerda2"
                            className="setas-linha-produto"
                            src={Seta}
                            alt="Seta esquerda"
                            style={{ transform: 'rotate(180deg)' }}
                            onClick={() => moverTwo('esquerda')}
                        />
                    </div>
                    <img
                        src={VetoresLinhas}
                        alt="Vetores de linhas"
                        style={{ position: 'absolute', width: '100%', height: '61%' }}
                    />
                </section>

                <aside id="sub-rodape">
                    <div className="div-rodape">
                        <img
                            src={IconeCaixa}
                            alt="Ícone de caixa"
                        />
                        <div>
                            <p className="p-rodape-title texto-pequeno mb-0">Frete Grátis</p>
                            <p className="p-rodape-text texto-pequeno mb-0">Para todo Brasil</p>
                        </div>
                    </div>
                    <div className="div-rodape">
                        <img
                            src={IconeCartao}
                            alt="Ícone de cartão de crédito"
                        />
                        <div>
                            <p className="p-rodape-title texto-pequeno mb-0">Pagamento Seguro</p>
                            <p className="p-rodape-text texto-pequeno mb-0">10x sem juros no cartão</p>
                        </div>
                    </div>
                </aside>
                <CarrinhoDeCompras
                    produtosSelecionados={produtosSelecionados}
                    setProdutosSelecionados={setProdutosSelecionados}
                />
            </main>
            <Footer />
        </>
    );
};

export default Store;