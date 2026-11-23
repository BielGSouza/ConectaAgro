import { corDoNome, iniciais } from './utils';

// Círculo com as iniciais. Quando houver foto no backend, basta trocar por <img>.
export default function Avatar({ nome, tamanho = 48 }) {
  return (
    <span
      className="avatar"
      style={{ '--tam': `${tamanho}px`, background: corDoNome(nome) }}
      aria-hidden="true"
    >
      {iniciais(nome)}
    </span>
  );
}
