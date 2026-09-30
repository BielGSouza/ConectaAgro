import React, { useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../../css/fontes.css'
import '../../css/root.css'
import '../../css/news.css'

// Imagens da seção "Em Alta"
import NoticiaMaior from '../../assets/pageNews/noticiaMaior.png';
import FotoTrator from '../../assets/pageNews/fotoTrator.png';
import FotoGraos from '../../assets/pageNews/fotoGraos.png';
import ChinaPanama from '../../assets/pageNews/China-e-Panama.jpg';
import CNA from '../../assets/pageNews/CNA.jpg';

// Imagens da seção "Notícias" (fixas)
import TarcisioAgro from '../../assets/pageNews/tarcisio-agro.jpg';
import ESX2026 from '../../assets/pageNews/ESX2026.jpeg';
import Preco from '../../assets/pageNews/preco.jpg';
import ConexaoMulheres from '../../assets/pageNews/conexao-mulheres.jpg';
import DoisBrasis from '../../assets/pageNews/dois-brasis.jpeg';
import ConexaoAgro from '../../assets/pageNews/conexao-agro.jpeg';
import LiderancaFeminina from '../../assets/pageNews/lideranca-feminina.png';
import SNFZ11 from '../../assets/pageNews/SNFZ11.jpg';
import AgroMelodiaHarmonia from '../../assets/pageNews/agro-melodia-harmonia.png';
import AgroBaiano from '../../assets/pageNews/agro-baiano.jpg';

// Imagens da seção "Novidades"
import IA from '../../assets/pageNews/IA.jpg';
import TratorHibrido from '../../assets/pageNews/tratorhibrido.jpg';
import Robos from '../../assets/pageNews/robos.png';
import Irrigacao from '../../assets/pageNews/Irrigacao.png';

const News = () => {
  // Estado para armazenar notícias adicionadas dinamicamente
  const [noticias, setNoticias] = useState([]);
  const [novaNoticia, setNovaNoticia] = useState({
    titulo: '',
    img: '',
    link: ''
  });

  // Função para criar nova notícia
  const criarNoticia = () => {
    if (!novaNoticia.titulo.trim() || !novaNoticia.img.trim()) {
      alert('Por favor, preencha o título e a URL da imagem.');
      return;
    }

    const novaNoticiaObj = {
      id: Date.now(),
      titulo: novaNoticia.titulo,
      img: novaNoticia.img,
      link: novaNoticia.link || '#'
    };

    setNoticias([...noticias, novaNoticiaObj]);
    
    // Limpar o formulário
    setNovaNoticia({
      titulo: '',
      img: '',
      link: ''
    });
  };

  // Função para lidar com mudanças nos inputs
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const campoMap = {
      'add-titulo': 'titulo',
      'add-img': 'img',
      'add-link': 'link'
    };
    
    setNovaNoticia({
      ...novaNoticia,
      [campoMap[id] || id]: value
    });
  };

  return (
    <>
      <Header />
      <main style={{display: 'block'}}>
        <section id="em-alta">
          <div>
            <h2 className="titulo mb-0">Em Alta</h2>
            <hr className="hrone" />
            <div id="noticias-em-alta">
              <a 
                id="noticiaOne"
                className="card-noticias"
                href="https://cbn.globo.com/brasil/noticia/2024/10/17/brasil-tem-aumento-de-90percent-do-reflorestamento-nos-ultimos-tres-anos.ghtml"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundImage: `url(${NoticiaMaior})` }}
              >
                <h3 className="subtitulo mb-0">A taxa de reflorestamento cresce no Brasil</h3>
              </a>
              <div id="layout-card">
                <a 
                  id="noticiaTwo"
                  className="card-noticias"
                  href="https://valor.globo.com/agronegocios/noticia/2026/05/21/marca-chinesa-lanca-tratores-hibridos-no-brasil-e-mira-10percent-do-mercado.ghtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundImage: `url(${FotoTrator})` }}
                >
                  <h4 className="subtitulo-pequeno mb-0">Novo modelo de Trator é lançado no Brasil</h4>
                </a>
                <a 
                  id="noticiaThree"
                  className="card-noticias"
                  href="https://globorural.globo.com/especiais/caminhos-da-safra/noticia/2026/02/frete-de-graos-deve-subir-20percent-em-fevereiro-mas-abaixo-do-pico-de-2025.ghtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundImage: `url(${FotoGraos})` }}
                >
                  <h4 className="subtitulo-pequeno mb-0">Frete dos Grãos deve aumentar em 20%</h4>
                </a>
                <a 
                  id="noticiaFour"
                  className="card-noticias"
                  href="https://agro2.com.br/agronegocio/china-e-panama-abrem-mercado-para-novos-produtos-agropecuarios-brasileiros/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundImage: `url(${ChinaPanama})` }}
                >
                  <h4 className="subtitulo-pequeno mb-0">China e Panamá abrem mercado para o agro</h4>
                </a>
                <a 
                  id="noticiaFive" 
                  className="card-noticias"
                  href="https://cnabrasil.org.br/noticias/cna-debate-modernizacao-do-credito-rural-e-lei-do-agro-3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundImage: `url(${CNA})` }}
                >
                  <h4 className="subtitulo-pequeno mb-0">CNA analisa modernização do agro e debate nova lei do agro</h4>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="noticias">
          <div>
            <h2 className="titulo mb-0">Notícias</h2>
            <hr className="hrone" />


            <div id="cards-noticias">
              <a 
                className="card-horizontal"
                href="https://noticias.uol.com.br/ultimas-noticias/agencia-estado/2026/06/20/tarcisio-agro-esta-sendo-desrespeitado-e-produtores-estao-em-dificuldade.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TarcisioAgro} alt="Notícia 1" />
                <h3 className='subtitulo-pequeno mb-0'>Tarcísio: agro está sendo desrespeitado e produtores estão em dificuldade</h3>
              </a>

              <a 
                className="card-horizontal"
                href="https://www.gov.br/agricultura/pt-br/composicao/sfa/espirito-santo/noticias/mapa-participa-do-esx-2026-e-desta-avancos-do-agro-capixaba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ESX2026} alt="Notícia 2" />
                <h3 className='subtitulo-pequeno mb-0'>Mapa participa do ESX 2026 e destaca avanços do agro capixaba</h3>
              </a>

              <a 
                className="card-horizontal"
                href="https://www.noticiasagricolas.com.br/artigos/artigos-geral/422409-precos-sobem-custos-disparam-e-margens-do-agro-continuam-sob-pressao.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Preco} alt="Notícia 3" />
                <h3 className='subtitulo-pequeno mb-0'>Preços sobem, custos disparam e margens do agro continuam sob pressão</h3>
              </a>

              <a 
                className="card-horizontal"
                href="https://www.portaldasmissoes.com.br/noticias/coopermil-realiza-1-encontro-do-programa-conexao-mulheres-no-agro-8504?pagina=1347"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ConexaoMulheres} alt="Notícia 4" />
                <h3 className='subtitulo-pequeno mb-0'>Coopermil realiza 1º encontro do programa Conexão Mulheres no Agro</h3>
              </a>

              <a 
                className="card-horizontal"
                href="https://upiara.scc10.com.br/noticias/o-agro-mostrou-dois-brasis-um-entrega-resultado-o-outro-ainda-trava-no-basico/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={DoisBrasis} alt="Notícia 5" />
                <h3 className='subtitulo-pequeno mb-0'>O agro mostrou dois brasis: um entrega resultado, o outro ainda trava no básico</h3>
              </a>

              <a 
                className="card-horizontal"
                href="https://pocosdecaldas.mg.gov.br/noticias/conexao-agro-fortalece-o-setor-rural-e-lanca-2a-festa-do-cafe-em-pocos-de-caldas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ConexaoAgro} alt="Notícia 6" />
                <h3 className='subtitulo-pequeno mb-0'>Conexão Agro fortalece o setor rural e lança 2ª festa do café em Poços de Caldas</h3>
              </a>

              <a 
                className="card-horizontal"
                href="https://cnabrasil.org.br/noticias/liderancas-femininas-do-agro-catarinense-participam-do-evento-conhecendo-a-federacao"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LiderancaFeminina} alt="Notícia 7" />
                <h3 className='subtitulo-pequeno mb-0'>Lideranças femininas do agro catarinense participam do evento conhecendo a federação</h3>
              </a>

              <a 
                className="card-horizontal"
                href="https://www.suno.com.br/noticias/snfz11-surfa-avanco-do-agro-brasileiro-que-ja-superou-meta-global-para-2050/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={SNFZ11} alt="Notícia 8" />
                <h3 className='subtitulo-pequeno mb-0'>SNFZ11: Surfa avanço do agro brasileiro que já superou meta global para 2050</h3>
              </a>

              <a 
                className="card-horizontal"
                href="https://www.canalrural.com.br/opiniao-noticias/sem-harmonia-brasil-nao-vira-melodia-sem-comunicacao-agro-vira-cacofonia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={AgroMelodiaHarmonia} alt="Notícia 9" />
                <h3 className='subtitulo-pequeno mb-0'>Sem harmonia, Brasil não vira melodia; sem comunicação.</h3>
              </a>

              <a 
                className="card-horizontal"
                href="https://www.agrolink.com.br/noticias/seagri-leva-pauta-do-agro-baiano-a-cinco-orgaos-federais-em-brasilia_515800.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={AgroBaiano} alt="Notícia 10" />
                <h3 className='subtitulo-pequeno mb-0'>SEAGRI leva pauta do agro baiano a cinco órgãos federais em Brasília</h3>
              </a>

              {/* Notícias adicionadas dinamicamente */}
              {noticias.map((noticia) => (
                <a 
                  key={noticia.id}
                  className="card-horizontal"
                  href={noticia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={noticia.img} alt={noticia.titulo} />
                  <h3>{noticia.titulo}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="novidades">
          <h2 className="titulo mb-0">Novidades</h2>
          <hr className="hrone" />

          <div className="grid-novidades">
            <a 
              className="card-novidade" 
              href="https://g1.globo.com/sp/presidente-prudente-e-regiao/noticia/2025/10/06/uso-de-ia-no-campo-detecta-pragas-com-mais-de-90percent-de-precisao-conheca-pesquisa-de-brasileira.ghtml" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IA} alt="Drone no agro" />
              <div className="info-novidade">
                <span>Tecnologia</span>
                <h3>IA detecta pragas em tempo real</h3>
                <p>Saiba mais →</p>
              </div>
            </a>

            <a 
              className="card-novidade" 
              href="https://clickpetroleoegas.com.br/depois-da-byd-e-outras-china-invade-o-brasil-com-tratores-gigantes-de-ate-700-cv-economia-de-combustivel-de-50-e-fabrica-bilionaria-planejada-apos-zoomlion-projetar-r-500-milhoes-em-ven-afch/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TratorHibrido} alt="Trator híbrido" />
              <div className="info-novidade">
                <span>Equipamentos</span>
                <h3>Novo trator híbrido chega ao Brasil</h3>
                <p>Saiba mais →</p>
              </div>
            </a>

            <a 
              className="card-novidade" 
              href="https://www.tribunadoagreste.com.br/geral/2026/06/20/925294-robos-passam-a-atuar-em-lavouras-de-algodao-em-xinjiang" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Robos} alt="Robôs no campo" />
              <div className="info-novidade">
                <span>Tendências</span>
                <h3>Robôs passam a atuar em lavouras</h3>
                <p>Saiba mais →</p>
              </div>
            </a>

            <a 
              className="card-novidade" 
              href="https://conexaosafra.com/agronegocio/irrigacao-inteligente-tres-formas-de-usar-menos-agua-no-campo/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Irrigacao} alt="Irrigação inteligente" />
              <div className="info-novidade">
                <span>Inovação</span>
                <h3>Irrigação inteligente economiza água</h3>
                <p>Saiba mais →</p>
              </div>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default News;