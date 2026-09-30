import React, { useState, useRef, useEffect } from 'react';
import Header from "../../components/Header";
import '../../css/message.css';

// Importações dos ícones da seção de mensagens
import IconeImagem from '../../assets/sectionMessage/image_50dp_263238_FILL0_wght400_GRAD0_opsz48 1.svg';
import IconeEnviar from '../../assets/sectionMessage/send_50dp_263238_FILL0_wght400_GRAD0_opsz48 1.svg';

const Message = () => {
  // Estados para controle do modal e mensagens
  const [modalAberto, setModalAberto] = useState(false);
  const [contatoSelecionado, setContatoSelecionado] = useState('');
  const [mensagens, setMensagens] = useState({});
  const [mensagemAtual, setMensagemAtual] = useState('');
  const [mensagemModal, setMensagemModal] = useState('');
  const [contatos, setContatos] = useState([
    'Ronaldinho Gaucho',
    'Marcão',
    'Edmilson',
    'Roque Junior',
    'Lucio',
    'Roberto Carlos',
    'Cafu',
    'Ronaldo',
    'Rilvaldo',
    'Gilberto Silva',
    'Klebérson'
  ]);

  const messagesEndRef = useRef(null);
  const messagesModalEndRef = useRef(null);
  const dialogRef = useRef(null);

  // Função para abrir o modal
  const abrirModal = (nome) => {
    setContatoSelecionado(nome);
    setModalAberto(true);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
    // Atualiza o cabeçalho da mensagem
    document.getElementById('p-header-mensagem').textContent = nome;
    document.getElementById('p-header-modal').textContent = nome;
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalAberto(false);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  // Função para enviar mensagem (versão desktop)
  const enviarMensagem = () => {
    if (!mensagemAtual.trim() || !contatoSelecionado) return;

    const novaMensagem = {
      id: Date.now(),
      texto: mensagemAtual,
      remetente: 'eu',
      hora: new Date().toLocaleTimeString()
    };

    setMensagens(prev => ({
      ...prev,
      [contatoSelecionado]: [...(prev[contatoSelecionado] || []), novaMensagem]
    }));

    setMensagemAtual('');
    
    // Simular resposta automática
    setTimeout(() => {
      const resposta = {
        id: Date.now() + 1,
        texto: 'Obrigado pela mensagem! Em breve retorno.',
        remetente: 'contato',
        hora: new Date().toLocaleTimeString()
      };
      setMensagens(prev => ({
        ...prev,
        [contatoSelecionado]: [...(prev[contatoSelecionado] || []), resposta]
      }));
    }, 1000);
  };

  // Função para enviar mensagem (versão modal)
  const enviarMensagemModal = () => {
    if (!mensagemModal.trim() || !contatoSelecionado) return;

    const novaMensagem = {
      id: Date.now(),
      texto: mensagemModal,
      remetente: 'eu',
      hora: new Date().toLocaleTimeString()
    };

    setMensagens(prev => ({
      ...prev,
      [contatoSelecionado]: [...(prev[contatoSelecionado] || []), novaMensagem]
    }));

    setMensagemModal('');

    // Simular resposta automática
    setTimeout(() => {
      const resposta = {
        id: Date.now() + 1,
        texto: 'Obrigado pela mensagem! Em breve retorno.',
        remetente: 'contato',
        hora: new Date().toLocaleTimeString()
      };
      setMensagens(prev => ({
        ...prev,
        [contatoSelecionado]: [...(prev[contatoSelecionado] || []), resposta]
      }));
    }, 1000);
  };

  // Efeito para scroll automático nas mensagens
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [mensagens, contatoSelecionado]);

  useEffect(() => {
    if (messagesModalEndRef.current) {
      messagesModalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [mensagens, contatoSelecionado]);

  // Função para lidar com Enter no textarea
  const handleKeyPress = (e, tipo) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (tipo === 'desktop') {
        enviarMensagem();
      } else {
        enviarMensagemModal();
      }
    }
  };

  useEffect(() => {
      document.title = "ConectaAgro - Mensagem"
    }, [])

  return (
    <>
      <Header />
      <main id="main-message">
        <section id="contatos">
          <div id="contatos-header">
            <p id="p-header-contato">nome_usuario</p>
            <input 
              type="text" 
              id="input-header-contatos" 
              placeholder="Pesquisar contatos..." 
            />
          </div>

          <div id="contatos-body">
            {contatos.map((contato, index) => (
              <div 
                key={index}
                className="card-contato" 
                onClick={() => abrirModal(contato)}
              >
                <div className="d-flex gap-2 align-items-center">
                  <div className="foto-contato" />
                  <p className="mb-0 paragrafo">{contato}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2F5D50">
                  <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                </svg>
              </div>
            ))}
          </div>
        </section>

        <section id="mensagens">
          <div id="div-header-mensagem">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="24px" 
              viewBox="0 -960 960 960" 
              width="24px" 
              fill="#2F5D50" 
              onClick={closeModal}
            >
              <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
            <p className="mb-0" id="p-header-mensagem">{contatoSelecionado || 'Selecione um contato'}</p>
          </div>
          <div id="div-body-mensagem">
            {contatoSelecionado && mensagens[contatoSelecionado]?.map((msg) => (
              <div 
                key={msg.id}
                className={`mensagem ${msg.remetente === 'eu' ? 'mensagem-enviada' : 'mensagem-recebida'}`}
              >
                <p className="mb-0">{msg.texto}</p>
                <span className="hora-mensagem">{msg.hora}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div id="div-head-mensagem">
            <div id="input">
              <div id="input-message">
                <textarea 
                  id="text-area-message" 
                  placeholder="Digite sua mensagem..."
                  value={mensagemAtual}
                  onChange={(e) => setMensagemAtual(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'desktop')}
                />
                <img 
                  id="icon-image"
                  src={IconeImagem}
                  alt="Ícone de imagem" 
                />
                <button id="btn-send-message" onClick={enviarMensagem}>
                  <img 
                    id="icon-send"
                    src={IconeEnviar}
                    alt="Enviar mensagem" 
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <dialog id="tela-mensagem-mobile" ref={dialogRef}>
        <section id="section-mensagem-modal">
          <div id="div-header-mensagem-modal">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="24px" 
              viewBox="0 -960 960 960" 
              width="24px" 
              fill="#2F5D50" 
              onClick={closeModal}
            >
              <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
            <p className="mb-0" id="p-header-modal">{contatoSelecionado || 'Selecione um contato'}</p>
          </div>
          <div id="div-body-mensagem-modal">
            {contatoSelecionado && mensagens[contatoSelecionado]?.map((msg) => (
              <div 
                key={msg.id}
                className={`mensagem ${msg.remetente === 'eu' ? 'mensagem-enviada' : 'mensagem-recebida'}`}
              >
                <p className="mb-0">{msg.texto}</p>
                <span className="hora-mensagem">{msg.hora}</span>
              </div>
            ))}
            <div ref={messagesModalEndRef} />
          </div>
          <div id="div-head-mensagem-modal">
            <div id="input">
              <div id="input-message">
                <textarea 
                  id="text-area-message-modal" 
                  placeholder="Digite sua mensagem..."
                  value={mensagemModal}
                  onChange={(e) => setMensagemModal(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, 'modal')}
                />
                <img 
                  id="icon-image"
                  src={IconeImagem}
                  alt="Ícone de imagem" 
                />
                <button id="btn-send-message-modal" onClick={enviarMensagemModal}>
                  <img 
                    id="icon-send"
                    src={IconeEnviar}
                    alt="Enviar mensagem" 
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </dialog>
    </>
  );
};

export default Message;