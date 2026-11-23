import { useEffect, useMemo, useState } from 'react';
import Header from '../../components/Header';
import ContactList from '../../components/chat/ContactList';
import ChatWindow from '../../components/chat/ChatWindow';
import { useChat } from '../../components/chat/useChat';
import { normalizar } from '../../components/chat/utils';

import '../../css/fontes.css';
import '../../css/root.css';
import '../../css/chat.css';

// Troque por dados do backend quando houver. O `id` precisa ser único e estável.
const CONTATOS = [
  { id: 'ronaldinho-gaucho', nome: 'Ronaldinho Gaucho' },
  { id: 'marcao', nome: 'Marcão' },
  { id: 'edmilson', nome: 'Edmilson' },
  { id: 'roque-junior', nome: 'Roque Junior' },
  { id: 'lucio', nome: 'Lucio' },
  { id: 'roberto-carlos', nome: 'Roberto Carlos' },
  { id: 'cafu', nome: 'Cafu' },
  { id: 'ronaldo', nome: 'Ronaldo' },
  { id: 'rilvaldo', nome: 'Rilvaldo' },
  { id: 'gilberto-silva', nome: 'Gilberto Silva' },
  { id: 'kleberson', nome: 'Klebérson' },
];

const USUARIO = 'nome_usuario'; // virá do login
const SEM_MENSAGENS = [];

export default function Message() {
  const { conversas, naoLidas, digitando, ativoId, abrir, fechar, enviar } = useChat();
  const [busca, setBusca] = useState('');

  useEffect(() => {
    document.title = 'ConectaAgro - Mensagem';
  }, []);

  // Filtra pela busca (sem acento) e põe no topo quem conversou por último.
  const contatosVisiveis = useMemo(() => {
    const termo = normalizar(busca.trim());
    return CONTATOS.filter((c) => normalizar(c.nome).includes(termo))
      .map((c) => ({ ...c, ultima: conversas[c.id]?.at(-1) }))
      .sort((a, b) => (b.ultima?.ts ?? 0) - (a.ultima?.ts ?? 0));
  }, [busca, conversas]);

  const contatoAtivo = CONTATOS.find((c) => c.id === ativoId) ?? null;

  return (
    <>
      <Header />
      {/* data-view só importa no celular: decide se aparece a lista ou a conversa */}
      <main className="chat" data-view={contatoAtivo ? 'conversa' : 'lista'}>
        <ContactList
          usuario={USUARIO}
          contatos={contatosVisiveis}
          ativoId={ativoId}
          naoLidas={naoLidas}
          busca={busca}
          onBusca={setBusca}
          onAbrir={abrir}
        />
        <ChatWindow
          contato={contatoAtivo}
          mensagens={conversas[ativoId] ?? SEM_MENSAGENS}
          digitando={Boolean(digitando[ativoId])}
          onVoltar={fechar}
          onEnviar={(conteudo) => enviar(ativoId, conteudo)}
        />
      </main>
    </>
  );
}
