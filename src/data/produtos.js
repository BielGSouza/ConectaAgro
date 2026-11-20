// Catálogo de produtos da loja AgroHub (usado por todas as seções da Loja)
import Enxada from '../assets/produtos/enxada.jpg';
import SacoSilagem from '../assets/produtos/saco-de-silagem.jpg';
import SementeUva from '../assets/produtos/semente-uva.webp';
import SementeCalendula from '../assets/produtos/semente-calendula.jpg';
import SementeOnzeHoras from '../assets/produtos/semente-onze-horas.jpg';
import SementeCapuchinha from '../assets/produtos/semente-capuchinha.jpg';
import Inseticida from '../assets/produtos/inseticida.jpg';
import AduboNpk from '../assets/produtos/adubo-npk.svg';
import Pulverizador from '../assets/produtos/pulverizador.svg';
import Luvas from '../assets/produtos/luvas.svg';
import Bota from '../assets/produtos/bota-borracha.svg';
import Tesoura from '../assets/produtos/tesoura-poda.svg';

export const produtos = [
    { id: 1, nome: 'Enxada com cabo de madeira', preco: 75.90, imagem: Enxada },
    { id: 2, nome: 'Saco de silagem', preco: 27.50, imagem: SacoSilagem },
    { id: 3, nome: 'Semente de uva', preco: 32.49, imagem: SementeUva },
    { id: 4, nome: 'Semente de calêndula', preco: 8.90, imagem: SementeCalendula },
    { id: 5, nome: 'Semente de onze horas', preco: 6.90, imagem: SementeOnzeHoras },
    { id: 6, nome: 'Semente de capuchinha', preco: 7.50, imagem: SementeCapuchinha },
    { id: 7, nome: 'Inseticida Kelldrin SC 25 (30 ml)', preco: 39.90, imagem: Inseticida },
    { id: 8, nome: 'Adubo NPK 10-10-10 (5 kg)', preco: 49.90, imagem: AduboNpk },
    { id: 9, nome: 'Pulverizador costal 20 L', preco: 189.90, imagem: Pulverizador },
    { id: 10, nome: 'Luvas de proteção', preco: 18.90, imagem: Luvas },
    { id: 11, nome: 'Bota de borracha', preco: 64.90, imagem: Bota },
    { id: 12, nome: 'Tesoura de poda', preco: 42.00, imagem: Tesoura },
];

const porId = (ids) => ids.map((id) => produtos.find((p) => p.id === id));

export const melhoresOfertas = porId([1, 7, 9, 3, 10, 12]);
export const listaProdutos = porId([8, 9, 10, 11, 12, 1, 2, 7, 3, 4]);
export const paraVoce = porId([11, 12, 8, 6, 5, 4, 10, 9]);
