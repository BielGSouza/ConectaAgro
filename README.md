# ConectaAgro

Site do projeto **Agrotech** (PBL - FIAP ON 2026), desenvolvido pelo **Grupo 25**.
O ConectaAgro reúne notícias do campo, ferramentas para o produtor rural, previsão do clima agrícola, uma loja virtual (AgroHub) e um canal de atendimento (SAC).

Site publicado: https://bielgsouza.github.io/ConectaAgro/

## Equipe

| Nome | RM |
|---|---|
| Felipe Matos | RM568892 |
| Gabriel de Souza | RM571035 |
| Hariel Santos | RM570145 |
| Mike Roberson | RM570333 |
| Matheus Marques | RM574122 |

## Tecnologias

- React 19 + Vite
- React Router (navegação entre páginas)
- Bootstrap 5
- **React Hook Form** (formulários e validação) — Fase 7
- **styled-components** (estilos por componente) — Fase 7
- APIs consumidas com `fetch`: **Open-Meteo** (clima) e **ViaCEP** (endereço) — Fase 7

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Home, com as ferramentas do produtor (calculadoras, conversor, simulador de crédito e clima) |
| `/noticias` | Notícias do agronegócio |
| `/loja` | Loja AgroHub, com carrinho e checkout |
| `/mensagem` | Envio de mensagem |
| `/sac` | Atendimento ao cliente |

## Novidades da Fase 7

### 1. Clima Agrícola com API real
- A busca por cidade agora usa dados reais da **Open-Meteo** (antes eram dados simulados).
- Mostra temperatura, descrição do tempo, umidade, vento, chuva, máxima e mínima do dia.
- A **dica de manejo** é calculada a partir dos dados recebidos (chuva forte, vento, calor, ar seco etc.).
- Tem estado de carregamento ("Consultando...") e mensagens de erro claras (cidade não encontrada, sem conexão).
- Arquivos: `src/services/clima.js` e `src/components/ClimaAgricola.jsx`.

### 2. Checkout da loja com formulário validado
- O botão "Finalizar compra" abre uma tela de checkout no lugar do antigo `alert()`.
- Formulário com **React Hook Form**: validação de nome, e-mail, telefone, CEP, endereço e forma de pagamento, com mensagens de erro e máscaras de telefone e CEP.
- O **CEP preenche rua e cidade automaticamente** pela API ViaCEP.
- Mostra o resumo do pedido e, ao confirmar, uma tela com o número do pedido. O carrinho é esvaziado depois.
- Estilizado com **styled-components**.
- Arquivos: `src/components/CheckoutModal.jsx` e `src/components/CarrinhoDeCompras.jsx`.

### Melhorias na loja
- Catálogo com **12 produtos** em `src/data/produtos.js`, usado nas seções "Melhores Ofertas", "Produtos" e "Produtos Para Você". Para adicionar ou editar um produto, basta alterar esse arquivo.
- Componente único de card de produto, com botão de adicionar ao carrinho acessível.
- Cinco ilustrações novas de produtos (adubo, pulverizador, luvas, bota e tesoura de poda) em `src/assets/produtos/`.
- Os espaços "Lugar para arte de ecommerce" foram substituídos pelos banners de frete grátis e de promoção.
- Preços de teste das sementes ajustados e texto "Saco de silagem" corrigido.
- Textos alternativos das imagens de produto agora usam o nome de cada produto.

### Equipe no rodapé
- Atualizado o integrante **Matheus Marques (RM574122)** no lugar de Pedro Dutra.
- Fotos de Matheus, Hariel e Gabriel atualizadas.

### Correções
- Imports de imagem em `src/routes/News/News.jsx` com maiúsculas/minúsculas diferentes do nome do arquivo (`China-e-panama.jpg` e `irrigacao.png`). Isso funcionava no Windows, mas quebrava o build em servidores Linux, como a Vercel.

## Estrutura do projeto

```
src/
├── assets/        imagens, ícones e fotos da equipe
├── components/    Header, Footer, calculadoras, ClimaAgricola, CarrinhoDeCompras, CheckoutModal...
├── css/           estilos por página/componente
├── data/          catálogo de produtos da loja
├── routes/        páginas (Home, News, Store, Message, Sac)
├── services/      chamadas às APIs (clima e CEP)
└── main.jsx       rotas da aplicação
```

## Como rodar

```bash
npm install
npm run dev
```

## Deploy

- **GitHub Pages** (configuração atual): `npm run deploy`. O `base` do Vite é `/ConectaAgro/`.
- **Vercel**: altere `base` em `vite.config.js` para `'/'` e `basename` em `src/main.jsx` para `"/"`.

## Vídeo de apresentação (Pitch Vídeo)

O link do vídeo fica no rodapé do site (`src/components/Footer.jsx`, elemento `link-video-pitch`).