import { useCallback, useEffect, useRef, useState } from 'react';

const RESPOSTA_AUTOMATICA = 'Obrigado pela mensagem! Em breve retorno.';
const ATRASO_RESPOSTA_MS = 1200;

let sequencia = 0;
const novoId = () => `msg-${++sequencia}`;

/**
 * Todo o estado e a lógica do chat ficam aqui, os componentes só desenham.
 * Para ligar a um backend/WebSocket, troque o setTimeout de `enviar`
 * pela chamada real e use `receber` quando chegar uma mensagem.
 */
export function useChat() {
  const [conversas, setConversas] = useState({}); // { [idContato]: Mensagem[] }
  const [naoLidas, setNaoLidas] = useState({}); // { [idContato]: number }
  const [digitando, setDigitando] = useState({}); // { [idContato]: boolean }
  const [ativoId, setAtivoId] = useState(null);

  const ativoRef = useRef(null); // evita "closure velha" dentro do setTimeout
  const timers = useRef(new Set());

  useEffect(() => {
    const pendentes = timers.current;
    return () => pendentes.forEach(clearTimeout);
  }, []);

  const adicionar = useCallback((id, msg) => {
    setConversas((prev) => ({ ...prev, [id]: [...(prev[id] ?? []), msg] }));
  }, []);

  const abrir = useCallback((id) => {
    ativoRef.current = id;
    setAtivoId(id);
    setNaoLidas((prev) => (prev[id] ? { ...prev, [id]: 0 } : prev));
  }, []);

  const fechar = useCallback(() => {
    ativoRef.current = null;
    setAtivoId(null);
  }, []);

  const receber = useCallback(
    (id, texto) => {
      adicionar(id, { id: novoId(), remetente: 'contato', texto, ts: Date.now() });
      if (ativoRef.current !== id) {
        setNaoLidas((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
      }
    },
    [adicionar],
  );

  const enviar = useCallback(
    (id, { texto, imagem }) => {
      adicionar(id, { id: novoId(), remetente: 'eu', texto, imagem, ts: Date.now() });

      // Simulação de resposta. Remover quando houver backend.
      setDigitando((prev) => ({ ...prev, [id]: true }));
      const timer = setTimeout(() => {
        timers.current.delete(timer);
        setDigitando((prev) => ({ ...prev, [id]: false }));
        receber(id, RESPOSTA_AUTOMATICA);
      }, ATRASO_RESPOSTA_MS);
      timers.current.add(timer);
    },
    [adicionar, receber],
  );

  return { conversas, naoLidas, digitando, ativoId, abrir, fechar, enviar, receber };
}
