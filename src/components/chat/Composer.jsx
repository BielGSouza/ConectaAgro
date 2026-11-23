import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { IconeEnviar, IconeFechar, IconeImagem } from './icons';

const ALTURA_MAXIMA = 140;
const ehTouch = () => window.matchMedia('(pointer: coarse)').matches;

export default function Composer({ onEnviar }) {
  const [texto, setTexto] = useState('');
  const [imagem, setImagem] = useState(null); // URL local da foto escolhida
  const areaRef = useRef(null);
  const arquivoRef = useRef(null);
  const pendenteRef = useRef(null); // URL que ainda não foi enviada (para liberar memória)

  // No desktop já abre pronto para digitar; no celular não, para não abrir o teclado sozinho.
  useEffect(() => {
    if (!ehTouch()) areaRef.current?.focus();
    return () => {
      if (pendenteRef.current) URL.revokeObjectURL(pendenteRef.current);
    };
  }, []);

  // Campo cresce conforme o texto, até o limite.
  useLayoutEffect(() => {
    const el = areaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, ALTURA_MAXIMA)}px`;
  }, [texto]);

  const podeEnviar = texto.trim() !== '' || imagem !== null;

  const enviar = () => {
    if (!podeEnviar) return;
    onEnviar({ texto: texto.trim(), imagem: imagem ?? undefined });
    pendenteRef.current = null; // a imagem agora pertence à conversa
    setTexto('');
    setImagem(null);
    areaRef.current?.focus();
  };

  const aoSubmeter = (e) => {
    e.preventDefault();
    enviar();
  };

  // Enter envia, Shift+Enter quebra linha. No celular, Enter sempre quebra linha.
  const aoTeclar = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing && !ehTouch()) {
      e.preventDefault();
      enviar();
    }
  };

  const escolherImagem = (e) => {
    const arquivo = e.target.files?.[0];
    e.target.value = '';
    if (!arquivo || !arquivo.type.startsWith('image/')) return;
    if (pendenteRef.current) URL.revokeObjectURL(pendenteRef.current);
    const url = URL.createObjectURL(arquivo);
    pendenteRef.current = url;
    setImagem(url);
  };

  const removerImagem = () => {
    if (pendenteRef.current) URL.revokeObjectURL(pendenteRef.current);
    pendenteRef.current = null;
    setImagem(null);
  };

  return (
    <form className="composer" onSubmit={aoSubmeter}>
      <div className="composer__miolo">
        {imagem && (
          <div className="composer__previa">
            <img src={imagem} alt="Foto que será enviada" />
            <button
              type="button"
              className="composer__remover"
              onClick={removerImagem}
              aria-label="Remover foto"
            >
              <IconeFechar width={16} height={16} />
            </button>
          </div>
        )}

        <div className="composer__campo">
          <button
            type="button"
            className="composer__anexo"
            onClick={() => arquivoRef.current?.click()}
            aria-label="Anexar foto"
          >
            <IconeImagem />
          </button>
          <input
            ref={arquivoRef}
            type="file"
            accept="image/*"
            hidden
            onChange={escolherImagem}
          />

          <textarea
            ref={areaRef}
            className="composer__texto"
            rows={1}
            placeholder="Digite sua mensagem..."
            aria-label="Mensagem"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={aoTeclar}
          />

          <button
            type="submit"
            className="composer__enviar"
            disabled={!podeEnviar}
            aria-label="Enviar mensagem"
          >
            <IconeEnviar width={20} height={20} />
          </button>
        </div>
      </div>
    </form>
  );
}
