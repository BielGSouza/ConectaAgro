import Avatar from './Avatar';
import { IconeBusca } from './icons';
import { formatarHora, previa } from './utils';

export default function ContactList({ usuario, contatos, ativoId, naoLidas, busca, onBusca, onAbrir }) {
  return (
    <aside className="chat-lista" aria-label="Conversas">
      <div className="chat-lista__topo">
        <h1 className="chat-lista__titulo">
          <span aria-hidden="true">👋</span> {usuario}
        </h1>
        <label className="chat-busca">
          <IconeBusca className="chat-busca__icone" width={18} height={18} />
          <input
            type="search"
            className="chat-busca__campo"
            placeholder="Pesquisar contatos..."
            aria-label="Pesquisar contatos"
            value={busca}
            onChange={(e) => onBusca(e.target.value)}
          />
        </label>
      </div>

      {contatos.length === 0 ? (
        <p className="chat-lista__vazio">Nenhum contato encontrado.</p>
      ) : (
        <ul className="chat-lista__itens">
          {contatos.map((contato) => {
            const total = naoLidas[contato.id] ?? 0;
            return (
              <li key={contato.id}>
                <button
                  type="button"
                  className="contato"
                  aria-current={contato.id === ativoId ? 'true' : undefined}
                  onClick={() => onAbrir(contato.id)}
                >
                  <Avatar nome={contato.nome} />
                  <span className="contato__corpo">
                    <span className="contato__nome">{contato.nome}</span>
                    <span className="contato__previa">{previa(contato.ultima)}</span>
                  </span>
                  <span className="contato__meta">
                    {contato.ultima && (
                      <time className="contato__hora">{formatarHora(contato.ultima.ts)}</time>
                    )}
                    {total > 0 && (
                      <span className="contato__badge" aria-label={`${total} não lidas`}>
                        {total}
                      </span>
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
}
