// Funções puras de apoio ao chat (sem React).

// Cores de avatar tiradas da identidade do site (verde, oliva, marrom, azul da logo).
const PALETA_AVATAR = ['#2F5C4F', '#4E6A2F', '#6D5348', '#2D6578', '#3B2E2A', '#5C7A3A'];

export const iniciais = (nome) => {
  const partes = nome.trim().split(/\s+/);
  const primeira = partes[0]?.[0] ?? '';
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : '';
  return (primeira + ultima).toUpperCase();
};

// Mesma cor sempre para o mesmo nome.
export const corDoNome = (nome) => {
  let hash = 0;
  for (const ch of nome) hash = (hash * 31 + ch.codePointAt(0)) >>> 0;
  return PALETA_AVATAR[hash % PALETA_AVATAR.length];
};

// "Marcão" casa com a busca "marcao".
export const normalizar = (texto) =>
  texto.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

const formatoHora = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' });
const formatoDia = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long' });

export const formatarHora = (ts) => formatoHora.format(ts);

export const ehMesmoDia = (a, b) => new Date(a).toDateString() === new Date(b).toDateString();

export const rotuloDia = (ts) => {
  const agora = Date.now();
  if (ehMesmoDia(ts, agora)) return 'Hoje';
  if (ehMesmoDia(ts, agora - 24 * 60 * 60 * 1000)) return 'Ontem';
  return formatoDia.format(ts);
};

// Texto curto da última mensagem, mostrado na lista de contatos.
export const previa = (msg) => {
  if (!msg) return 'Toque para conversar';
  const autor = msg.remetente === 'eu' ? 'Você: ' : '';
  if (msg.imagem) return `${autor}📷 ${msg.texto || 'Foto'}`;
  return autor + msg.texto;
};
