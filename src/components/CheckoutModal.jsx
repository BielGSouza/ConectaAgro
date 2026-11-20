import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled, { createGlobalStyle } from 'styled-components';
import { buscarEnderecoPorCep } from '../services/clima';

/* styled-components (Fase 7): estilos isolados por componente */
const TravaScroll = createGlobalStyle`
  body { overflow: hidden; }
`;

const Fundo = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(38, 50, 56, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 2000;
`;

const Caixa = styled.div`
  background: var(--primary-bg-color, #fff);
  color: var(--primary-text-color, #263238);
  width: 100%;
  max-width: 560px;
  max-height: 92vh;
  overflow-y: auto;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
`;

const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;

  h2 { font-size: 1.4rem; margin: 0; }
`;

const Fechar = styled.button`
  background: none;
  border: none;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  color: inherit;
`;

const Resumo = styled.ul`
  list-style: none;
  padding: 12px;
  margin: 0 0 16px;
  background: var(--firty-bg-color, #fafaf7);
  border-radius: 8px;
  font-size: 0.9rem;

  li { display: flex; justify-content: space-between; gap: 12px; padding: 2px 0; }
  li.total { font-weight: 700; border-top: 1px solid #d9d9d9; margin-top: 6px; padding-top: 8px; }
`;

const Grade = styled.div`
  display: grid;
  grid-template-columns: ${(p) => (p.$duas ? '1fr 1fr' : '1fr')};
  gap: 12px;
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

const Campo = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.85rem;
  margin-bottom: 12px;

  input, select {
    padding: 9px 10px;
    border-radius: 6px;
    border: 1.5px solid ${(p) => (p.$erro ? '#b3261e' : '#bdbdbd')};
    background: var(--bg-input-color, #fafaf7);
    font-size: 0.95rem;
  }
  input:focus-visible, select:focus-visible {
    outline: 2px solid var(--second-bg-color, #2f5c4f);
    outline-offset: 1px;
  }
`;

const MensagemErro = styled.span`
  color: #b3261e;
  font-size: 0.78rem;
`;

const Ajuda = styled.span`
  color: #5f6b70;
  font-size: 0.78rem;
`;

const Botao = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: var(--second-bg-color, #2f5c4f);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 4px;

  &:disabled { opacity: 0.6; cursor: not-allowed; }
  &:hover:not(:disabled) { filter: brightness(1.12); }
`;

const Sucesso = styled.div`
  text-align: center;
  padding: 12px 0;
  h2 { margin-bottom: 8px; }
  p { margin-bottom: 8px; }
`;

const formatarReais = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const mascaraTelefone = (v) => {
    const n = v.replace(/\D/g, '').slice(0, 11);
    if (n.length <= 10) return n.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '');
    return n.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
};

const mascaraCep = (v) => {
    const n = v.replace(/\D/g, '').slice(0, 8);
    return n.length > 5 ? `${n.slice(0, 5)}-${n.slice(5)}` : n;
};

const CheckoutModal = ({ itens, aoFechar, aoConcluir }) => {
    const {
        register, handleSubmit, setValue, setError, clearErrors,
        formState: { errors, isSubmitting },
    } = useForm({ mode: 'onBlur' });

    const [buscandoCep, setBuscandoCep] = useState(false);
    const [pedido, setPedido] = useState(null);

    const total = itens.reduce((soma, i) => soma + i.preco * i.quantidade, 0);

    const aoSairDoCep = async (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        if (cep.length !== 8) return;
        setBuscandoCep(true);
        clearErrors('cep');
        try {
            const end = await buscarEnderecoPorCep(cep);
            setValue('rua', end.rua, { shouldValidate: true });
            setValue('cidade', `${end.cidade} - ${end.uf}`, { shouldValidate: true });
        } catch (erro) {
            setError('cep', {
                message: erro.message === 'CEP_NAO_ENCONTRADO'
                    ? 'CEP não encontrado. Confira os números.'
                    : 'Não foi possível buscar o CEP. Preencha o endereço manualmente.',
            });
        } finally {
            setBuscandoCep(false);
        }
    };

    const enviar = async (dados) => {
        // Simula o envio ao servidor (o back-end entra no próximo ano)
        await new Promise((ok) => setTimeout(ok, 700));
        setPedido({ numero: Date.now().toString().slice(-6), nome: dados.nome.split(' ')[0], email: dados.email });
    };

    const fechar = () => {
        if (pedido) aoConcluir();
        aoFechar();
    };

    return (
        <Fundo onClick={fechar}>
            <TravaScroll />
            <Caixa role="dialog" aria-modal="true" aria-labelledby="titulo-checkout" onClick={(e) => e.stopPropagation()}>
                {pedido ? (
                    <Sucesso>
                        <h2 id="titulo-checkout">Pedido confirmado, {pedido.nome}!</h2>
                        <p>Número do pedido: <strong>#{pedido.numero}</strong></p>
                        <p>Enviamos o resumo para {pedido.email}.</p>
                        <Botao type="button" onClick={fechar}>Voltar à loja</Botao>
                    </Sucesso>
                ) : (
                    <>
                        <Topo>
                            <h2 id="titulo-checkout">Finalizar compra</h2>
                            <Fechar type="button" onClick={fechar} aria-label="Fechar">×</Fechar>
                        </Topo>

                        <Resumo>
                            {itens.map((i) => (
                                <li key={i.id}>
                                    <span>{i.quantidade}x {i.nome}</span>
                                    <span>{formatarReais(i.preco * i.quantidade)}</span>
                                </li>
                            ))}
                            <li className="total"><span>Total</span><span>{formatarReais(total)}</span></li>
                        </Resumo>

                        <form onSubmit={handleSubmit(enviar)} noValidate>
                            <Campo $erro={errors.nome}>
                                Nome completo
                                <input
                                    autoComplete="name"
                                    {...register('nome', {
                                        required: 'Informe seu nome completo.',
                                        validate: (v) => v.trim().split(' ').length >= 2 || 'Digite nome e sobrenome.',
                                    })}
                                />
                                {errors.nome && <MensagemErro role="alert">{errors.nome.message}</MensagemErro>}
                            </Campo>

                            <Grade $duas>
                                <Campo $erro={errors.email}>
                                    E-mail
                                    <input
                                        type="email"
                                        autoComplete="email"
                                        {...register('email', {
                                            required: 'Informe seu e-mail.',
                                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Use um e-mail válido, como nome@email.com.' },
                                        })}
                                    />
                                    {errors.email && <MensagemErro role="alert">{errors.email.message}</MensagemErro>}
                                </Campo>
                                <Campo $erro={errors.telefone}>
                                    Telefone
                                    <input
                                        type="tel"
                                        inputMode="numeric"
                                        autoComplete="tel"
                                        placeholder="(11) 99999-9999"
                                        {...register('telefone', {
                                            required: 'Informe um telefone para contato.',
                                            pattern: { value: /^\(\d{2}\) \d{4,5}-\d{4}$/, message: 'Digite DDD e número completos.' },
                                            onChange: (e) => { e.target.value = mascaraTelefone(e.target.value); },
                                        })}
                                    />
                                    {errors.telefone && <MensagemErro role="alert">{errors.telefone.message}</MensagemErro>}
                                </Campo>
                            </Grade>

                            <Campo $erro={errors.cep}>
                                CEP
                                <input
                                    inputMode="numeric"
                                    autoComplete="postal-code"
                                    placeholder="00000-000"
                                    {...register('cep', {
                                        required: 'Informe o CEP de entrega.',
                                        pattern: { value: /^\d{5}-\d{3}$/, message: 'O CEP tem 8 números.' },
                                        onChange: (e) => { e.target.value = mascaraCep(e.target.value); },
                                        onBlur: aoSairDoCep,
                                    })}
                                />
                                {buscandoCep && <Ajuda>Buscando endereço...</Ajuda>}
                                {errors.cep && <MensagemErro role="alert">{errors.cep.message}</MensagemErro>}
                            </Campo>

                            <Grade $duas>
                                <Campo $erro={errors.rua}>
                                    Rua
                                    <input autoComplete="address-line1" {...register('rua', { required: 'Informe a rua.' })} />
                                    {errors.rua && <MensagemErro role="alert">{errors.rua.message}</MensagemErro>}
                                </Campo>
                                <Campo $erro={errors.numero}>
                                    Número
                                    <input {...register('numero', { required: 'Informe o número.' })} />
                                    {errors.numero && <MensagemErro role="alert">{errors.numero.message}</MensagemErro>}
                                </Campo>
                            </Grade>

                            <Campo $erro={errors.cidade}>
                                Cidade
                                <input {...register('cidade', { required: 'Informe a cidade.' })} />
                                {errors.cidade && <MensagemErro role="alert">{errors.cidade.message}</MensagemErro>}
                            </Campo>

                            <Campo $erro={errors.pagamento}>
                                Forma de pagamento
                                <select defaultValue="" {...register('pagamento', { required: 'Escolha como quer pagar.' })}>
                                    <option value="" disabled>Selecione</option>
                                    <option value="pix">Pix</option>
                                    <option value="boleto">Boleto</option>
                                    <option value="cartao">Cartão de crédito</option>
                                </select>
                                {errors.pagamento && <MensagemErro role="alert">{errors.pagamento.message}</MensagemErro>}
                            </Campo>

                            <Botao type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Confirmando...' : `Confirmar pedido de ${formatarReais(total)}`}
                            </Botao>
                        </form>
                    </>
                )}
            </Caixa>
        </Fundo>
    );
};

export default CheckoutModal;
