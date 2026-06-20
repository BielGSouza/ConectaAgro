/* =============================================
   FILTRO-LOJA.JS - Filtro por Categoria e Busca na Loja
   ============================================= */

// Dados dos produtos (simulados para demonstração)
const produtos = [
    { nome: 'Trator Agrícola 75cv', categoria: 'maquinario', preco: 'R$ 145.000', img: '../assets/sectionStore/photo-1573561368183-fd88bdb4503d 1.png' },
    { nome: 'Pulverizador Costal 20L', categoria: 'equipamento', preco: 'R$ 389', img: '../assets/sectionStore/photo-1685335686020-e0b487f7f426 1.png' },
    { nome: 'Sementes de Soja – Saco 40kg', categoria: 'insumo', preco: 'R$ 290', img: '../assets/sectionStore/premium_photo-1661964196891-3d3f378a97b2 1.png' },
    { nome: 'Fertilizante NPK 10-10-10', categoria: 'insumo', preco: 'R$ 180', img: '../assets/sectionStore/photo-1573561368183-fd88bdb4503d 1.png' },
    { nome: 'Colheitadeira de Milho', categoria: 'maquinario', preco: 'R$ 380.000', img: '../assets/sectionStore/photo-1685335686020-e0b487f7f426 1.png' },
    { nome: 'Irrigador por Gotejamento', categoria: 'equipamento', preco: 'R$ 1.240', img: '../assets/sectionStore/premium_photo-1661964196891-3d3f378a97b2 1.png' },
    { nome: 'Herbicida Pós-Emergente 1L', categoria: 'insumo', preco: 'R$ 95', img: '../assets/sectionStore/photo-1573561368183-fd88bdb4503d 1.png' },
    { nome: 'Grade Aradora 32 Discos', categoria: 'maquinario', preco: 'R$ 28.500', img: '../assets/sectionStore/photo-1685335686020-e0b487f7f426 1.png' },
];

let categoriaAtiva = 'todos';
let buscaAtual = '';

function renderizarProdutos() {
    const container = document.getElementById('lista-produtos-filtrados');
    if (!container) return;

    const filtrados = produtos.filter(p => {
        const matchCategoria = categoriaAtiva === 'todos' || p.categoria === categoriaAtiva;
        const matchBusca = p.nome.toLowerCase().includes(buscaAtual.toLowerCase());
        return matchCategoria && matchBusca;
    });

    if (filtrados.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">
                <p style="font-size: 16px; margin: 0;">Nenhum produto encontrado para esta busca.</p>
            </div>`;
        return;
    }

    container.innerHTML = filtrados.map(p => `
        <div class="card-produto-filtrado" data-categoria="${p.categoria}">
            <div class="img-produto-wrap">
                <img src="${p.img}" alt="${p.nome}" loading="lazy">
            </div>
            <div class="info-produto">
                <p class="nome-produto">${p.nome}</p>
                <p class="preco-produto">${p.preco}</p>
                <button class="btn-adicionar-carrinho" onclick="adicionarCarrinho('${p.nome}')">
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    `).join('');
}

function filtrarCategoria(categoria) {
    categoriaAtiva = categoria;

    // Atualiza botões
    document.querySelectorAll('.btn-filtro').forEach(btn => {
        btn.classList.toggle('ativo', btn.dataset.cat === categoria);
    });

    renderizarProdutos();
}

function buscarProdutos(valor) {
    buscaAtual = valor;
    renderizarProdutos();
}

function adicionarCarrinho(nome) {
    mostrarToast(`"${nome}" adicionado ao carrinho! 🛒`, 'sucesso');
}

// Inicializar ao carregar
document.addEventListener('DOMContentLoaded', () => {
    // Injetar seção de filtro + grid de produtos após #card
    const secaoCard = document.getElementById('card');
    if (!secaoCard) return;

    // Criar seção de filtro
    const filtroSection = document.createElement('section');
    filtroSection.id = 'secao-catalogo';
    filtroSection.style.padding = '0 0 40px';

    filtroSection.innerHTML = `
        <div id="filtro-categorias">
            <p>Filtrar por:</p>
            <button class="btn-filtro ativo" data-cat="todos" onclick="filtrarCategoria('todos')">Todos</button>
            <button class="btn-filtro" data-cat="maquinario" onclick="filtrarCategoria('maquinario')">Maquinário</button>
            <button class="btn-filtro" data-cat="equipamento" onclick="filtrarCategoria('equipamento')">Equipamentos</button>
            <button class="btn-filtro" data-cat="insumo" onclick="filtrarCategoria('insumo')">Insumos</button>
        </div>
        <div id="busca-loja-wrap">
            <input
                id="input-busca-loja"
                type="text"
                placeholder="🔍  Buscar produto..."
                oninput="buscarProdutos(this.value)"
            >
        </div>
        <div id="lista-produtos-filtrados"></div>
    `;

    // Inserir depois da seção #card
    secaoCard.after(filtroSection);

    // CSS inline para o grid de produtos filtrados
    const style = document.createElement('style');
    style.textContent = `
        #lista-produtos-filtrados {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            padding: 12px 5% 0;
        }
        .card-produto-filtrado {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
            transition: transform 0.2s, box-shadow 0.2s;
            display: flex;
            flex-direction: column;
        }
        .card-produto-filtrado:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.14);
        }
        .img-produto-wrap {
            aspect-ratio: 1;
            overflow: hidden;
            background: #f5f5f5;
        }
        .img-produto-wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .info-produto {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            flex: 1;
        }
        .nome-produto {
            margin: 0;
            font-size: 14px;
            font-weight: 600;
            color: #263238;
            line-height: 1.4;
        }
        .preco-produto {
            margin: 0;
            font-size: 16px;
            font-weight: 700;
            color: #2F5C4F;
        }
        .btn-adicionar-carrinho {
            margin-top: auto;
            background-color: #2F5C4F;
            color: #F1E9DC;
            border: none;
            padding: 9px 14px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .btn-adicionar-carrinho:hover { background-color: #263238; }
    `;
    document.head.appendChild(style);

    renderizarProdutos();
});

window.filtrarCategoria = filtrarCategoria;
window.buscarProdutos = buscarProdutos;
window.adicionarCarrinho = adicionarCarrinho;
