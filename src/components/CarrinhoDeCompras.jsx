import { useState } from 'react';
import '../css/CarrinhoDeCompras.css';
import CheckoutModal from './CheckoutModal';

const CarrinhoDeCompras = ({ produtosSelecionados, setProdutosSelecionados }) => {

    const [carrinhoAberto, setCarrinhoAberto] = useState(false);

    const remover_item = (produto) => {
        const novosProdutos = produtosSelecionados.filter(item => item.id !== produto.id);
        setProdutosSelecionados(novosProdutos);
    } 

    const [checkoutAberto, setCheckoutAberto] = useState(false);

    const finalizarCompra = () => {
        // O botão fica desativado com o carrinho vazio, mas validamos mesmo assim
        if (produtosSelecionados.length === 0) return;
        setCheckoutAberto(true);
    }

    const concluirCompra = () => {
        setProdutosSelecionados([]); // limpa o carrinho depois do pedido confirmado
        setCarrinhoAberto(false);
    }

    return (
        <>
            {!carrinhoAberto && (

                <div className='carrinho relative' onClick={() => setCarrinhoAberto(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path d="M444-576v-132H312v-72h132v-132h72v132h132v72H516v132h-72ZM213-117.21q-21-21.21-21-51T213.21-219q21.21-21 51-21T315-218.79q21 21.21 21 51T314.79-117q-21.21 21-51 21T213-117.21Zm432 0q-21-21.21-21-51T645.21-219q21.21-21 51-21T747-218.79q21 21.21 21 51T746.79-117q-21.21 21-51 21T645-117.21ZM48-792v-72h133l155 360h301l113-264h78L703-476q-9 20-26.5 32T637-432H317l-42 72h493v72H276q-42 0-63-36.5t0-71.5l52-90-131-306H48Z" /></svg>
                    <div className='quantidade-produto'>{produtosSelecionados.reduce((total, item) => total + item.quantidade, 0)}</div>
                </div>
            )}
            {carrinhoAberto && (
                <div className='carrinho-container'>

                    <div className="barra-carrinho">
                        <p className='mb-0 text-dark'>Carrinho</p>
                        <div className="fechar-carrinho" onClick={() => setCarrinhoAberto(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0c0b0b"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" /></svg>
                        </div>
                    </div>
                    {produtosSelecionados.length === 0 ? (
                        <div className="carrinho-vazio">
                            <p className='mb-0'>Seu carrinho está vazio. Adicione um produto da loja.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#817d7d"><path d="M444-576v-132H312v-72h132v-132h72v132h132v72H516v132h-72ZM213-117.21q-21-21.21-21-51T213.21-219q21.21-21 51-21T315-218.79q21 21.21 21 51T314.79-117q-21.21 21-51 21T213-117.21Zm432 0q-21-21.21-21-51T645.21-219q21.21-21 51-21T747-218.79q21 21.21 21 51T746.79-117q-21.21 21-51 21T645-117.21ZM48-792v-72h133l155 360h301l113-264h78L703-476q-9 20-26.5 32T637-432H317l-42 72h493v72H276q-42 0-63-36.5t0-71.5l52-90-131-306H48Z" /></svg>
                        </div>
                    ) : (
                        <div className='lista-do-carrinho'>
                            {produtosSelecionados.map((produto, index) => (
                                <div
                                    key={index}
                                    className='item-listado'
                                >
                                    <img src={produto.imagem} alt={produto.nome} className='img-item' />
                                    <div className='info-listado'>
                                        <p className='mb-0'>{produto.nome}</p>
                                        <p className='mb-0'>R$ {(produto.preco * produto.quantidade).toFixed(2)}</p>
                                        <p className='mb-0'>Quantidade: {produto.quantidade}</p>
                                    </div>
                                    <div className='btn-remover' onClick={() => remover_item(produto)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e21111"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"/></svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div>
                        <div className='info-carrinho'>
                            <p className='mb-0'>Total: R$ {produtosSelecionados.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0).toFixed(2)}</p>
                        </div>
                        <button className='btn-finalizar' onClick={finalizarCompra} disabled={produtosSelecionados.length === 0}>Finalizar compra</button>
                    </div>
                </div>
            )}
            {checkoutAberto && (
                <CheckoutModal
                    itens={produtosSelecionados}
                    aoFechar={() => setCheckoutAberto(false)}
                    aoConcluir={concluirCompra}
                />
            )}
        </>
    )
}

export default CarrinhoDeCompras
