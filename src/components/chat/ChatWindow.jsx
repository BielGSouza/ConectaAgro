import { Fragment, useEffect, useRef } from 'react';
import Avatar from './Avatar';
import Composer from './Composer';
import { IconeConversa, IconeVoltar } from './icons';
import LogoPequena from '../../assets/header/logo.png';
import { ehMesmoDia, formatarHora, rotuloDia } from './utils';

function EstadoVazio() {
  return (
    <section className="chat-conversa chat-conversa--vazia chat-fundo" aria-label="Nenhuma conversa aberta">
      <div className="chat-vazio">
        <span className="chat-vazio__selo">
          <img src={LogoPequena} alt="" width="40" height="40" />
        </span>
        <h2 className="chat-vazio__titulo">Selecione uma conversa</h2>
        <p className="chat-vazio__texto">
          Escolha um contato na lista para trocar mensagens com produtores e parceiros.
        </p>
        <IconeConversa className="chat-vazio__icone" width={20} height={20} />
      </div>
    </section>
  );
}

export default function ChatWindow({ contato, mensagens, digitando, onVoltar, onEnviar }) {
  const listaRef = useRef(null);
  const idAnterior = useRef(null);

  // Rola até a última mensagem: direto ao trocar de contato, suave ao chegar mensagem nova.
  useEffect(() => {
    const el = listaRef.current;
    if (!el) return;
    const trocou = idAnterior.current !== contato?.id;
    idAnterior.current = contato?.id;
    el.scrollTo({ top: el.scrollHeight, behavior: trocou ? 'auto' : 'smooth' });
  }, [contato?.id, mensagens.length]);

  if (!contato) return <EstadoVazio />;

  return (
    <section className="chat-conversa" aria-label={`Conversa com ${contato.nome}`}>
      <header className="chat-cabecalho">
        <button type="button" className="chat-cabecalho__voltar" onClick={onVoltar} aria-label="Voltar para os contatos">
          <IconeVoltar />
        </button>
        <Avatar nome={contato.nome} tamanho={40} />
        <div className="chat-cabecalho__texto">
          <h2 className="chat-cabecalho__nome">{contato.nome}</h2>
          {digitando && (
            <p className="chat-cabecalho__status" role="status">
              digitando…
            </p>
          )}
        </div>
      </header>

      <div
        className="chat-mensagens chat-fundo"
        ref={listaRef}
        role="log"
        aria-label="Mensagens"
      >
        <div className="chat-mensagens__fluxo">
          {mensagens.length === 0 && (
            <p className="chat-mensagens__inicio">Nenhuma mensagem ainda. Diga olá!</p>
          )}

          {mensagens.map((msg, i) => {
            const anterior = mensagens[i - 1];
            const proxima = mensagens[i + 1];
            const novoDia = !anterior || !ehMesmoDia(anterior.ts, msg.ts);
            const continua = !novoDia && anterior.remetente === msg.remetente;
            const fimDoGrupo =
              !proxima || proxima.remetente !== msg.remetente || !ehMesmoDia(proxima.ts, msg.ts);

            const classes = [
              'balao',
              msg.remetente === 'eu' ? 'balao--eu' : 'balao--contato',
              continua && 'balao--continua',
              fimDoGrupo && 'balao--fim',
              msg.imagem && 'balao--imagem',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <Fragment key={msg.id}>
                {novoDia && (
                  <div className="chat-dia" role="separator">
                    <span>{rotuloDia(msg.ts)}</span>
                  </div>
                )}
                <div className={classes}>
                  {msg.imagem && <img className="balao__img" src={msg.imagem} alt="Foto enviada" />}
                  {msg.texto && <p className="balao__texto">{msg.texto}</p>}
                  <time className="balao__hora">{formatarHora(msg.ts)}</time>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>

      {/* key: ao trocar de contato o campo recomeça limpo */}
      <Composer key={contato.id} onEnviar={onEnviar} />
    </section>
  );
}
