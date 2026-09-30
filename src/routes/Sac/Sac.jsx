import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../../css/sac.css';
import { useEffect, useState } from "react";

// Importação do logo
import Logo from '../../assets/header/logo.png';

const Sac = () => {
  // Estados para o formulário
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  // Estado para contador de caracteres
  const [caracteresRestantes, setCaracteresRestantes] = useState(500);

  // Função para lidar com mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Limitar mensagem a 500 caracteres
    if (name === 'mensagem' && value.length > 500) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });

    // Atualizar contador de caracteres
    if (name === 'mensagem') {
      setCaracteresRestantes(500 - value.length);
    }
  };

  // Função para enviar o formulário
  const enviarFormulario = () => {
    // Validação básica
    if (!formData.nome.trim() || !formData.sobrenome.trim() || 
        !formData.email.trim() || !formData.mensagem.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Validação de email simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    // Simular envio
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    
    // Limpar formulário
    setFormData({
      nome: '',
      sobrenome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
    setCaracteresRestantes(500);
  };

  useEffect(() => {
      document.title = "ConectaAgro - SAC"
    }, [])

  return (
    <div>
      <Header />
      <main>
        <div id="secao-formulario">
          <div>
            <p className="mb-0 text-uppercase texto-pequeno Inter">contate-nos</p>
            <h1 className="mb-0 Inter fw-bold titulo">Entre em contato conosco</h1>
            <p className="mb-0 Inter paragrafo">Entre em contato conosco para tirar dúvidas e relatar problemas que aparecem na plataforma</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-duplo">
              {/* Input de Nome */}
              <label htmlFor="nome" className="inputs-form">
                Nome:
                <input 
                  type="text" 
                  name="nome" 
                  id="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </label>
              {/* Input de Sobrenome */}
              <label htmlFor="sobrenome" className="inputs-form">
                Sobrenome:
                <input 
                  type="text" 
                  name="sobrenome" 
                  id="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            
            {/* Input de Email */}
            <label htmlFor="email" className="inputs-form">
              Email:
              <input 
                type="email" 
                name="email" 
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            
            <div className="input-duplo">
              {/* Input de Telefone */}
              <label htmlFor="telefone" className="inputs-form">
                Telefone:
                <input 
                  type="tel" 
                  name="telefone" 
                  id="telefone" 
                  maxLength="15"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </label>
              {/* Input de Assunto */}
              <label htmlFor="assunto" className="inputs-form">
                Assunto:
                <select 
                  name="assunto" 
                  id="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="sistema">Sistema</option>
                  <option value="layout">Layout</option>
                  <option value="duvida">Dúvida</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="reclamacao">Reclamação</option>
                </select>
              </label>
            </div>
            
            <label htmlFor="mensagem" className="inputs-form">
              Mensagem:
              <textarea 
                name="mensagem" 
                id="mensagem" 
                rows="4" 
                style={{ resize: 'none' }}
                value={formData.mensagem}
                onChange={handleChange}
                required
              />
              <p id="p-atencao" className="texto-pequeno">
                Máximo de 500 caracteres - {caracteresRestantes} restantes
              </p>
            </label>

            <button 
              type="button" 
              id="btn-form" 
              onClick={enviarFormulario}
            >
              <img 
                src={Logo}
                alt="Logo" 
                height="20" 
              />
              enviar
              <img 
                src={Logo}
                alt="Logo" 
                height="20" 
              />
            </button>
          </form>
        </div>

        <div id="cards-formulario">
          <div className="card-form">
            <svg width="100" height="100" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.3335 102.667V16.3333C9.3335 14.4667 10.0335 12.8333 11.4335 11.4333C12.8335 10.0333 14.4668 9.33333 16.3335 9.33333H95.6668C97.5335 9.33333 99.1668 10.0333 100.567 11.4333C101.967 12.8333 102.667 14.4667 102.667 16.3333V77C102.667 78.8667 101.967 80.5 100.567 81.9C99.1668 83.3 97.5335 84 95.6668 84H28.0002L9.3335 102.667ZM24.9668 77H95.6668V16.3333H16.3335V86.3333L24.9668 77Z"
                fill="#263238" />
            </svg>
            <div className="texto-card-form">
              <h2 className="mb-0">Contate-nos pelo site</h2>
              <p className="paragrafo mb-0">Preencha o campo e assim que recebermos seu chamado começaremos o atendimento.</p>
            </div>
          </div>
          
          <div className="card-form">
            <svg width="100" height="100" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M92.75 98C83.7278 98 74.5306 95.8222 65.1583 91.4667C55.7861 87.1111 47.0944 80.9278 39.0833 72.9167C31.0722 64.9056 24.8889 56.2139 20.5333 46.8417C16.1778 37.4694 14 28.2722 14 19.25C14 17.7497 14.5001 16.4998 15.5003 15.5003C16.4998 14.5001 17.7497 14 19.25 14H35.5833C36.6722 14 37.6056 14.3889 38.3833 15.1667C39.1611 15.9444 39.7056 16.9167 40.0167 18.0833L43.1585 32.7413C43.3195 33.8582 43.3028 34.8639 43.1083 35.7583C42.9139 36.6528 42.4966 37.4201 41.8565 38.0602L30.2167 49.8167C32.2389 53.2389 34.3778 56.4278 36.6333 59.3833C38.8889 62.3389 41.3778 65.1389 44.1 67.7833C46.9778 70.7389 50.0111 73.4417 53.2 75.8917C56.3889 78.3417 59.7333 80.5 63.2333 82.3667L74.3167 70.9333C75.0944 70.0778 75.9947 69.4944 77.0175 69.1833C78.0403 68.8722 79.0456 68.7944 80.0333 68.95L93.9167 71.9833C95.0833 72.2944 96.0556 72.9182 96.8333 73.8547C97.6111 74.7919 98 75.8403 98 77V92.75C98 94.2503 97.4999 95.5002 96.4997 96.4997C95.5002 97.4999 94.2503 98 92.75 98ZM26.7167 43.4L36.1667 33.8333L33.4833 21H21C21.1556 24.2667 21.6806 27.7083 22.575 31.325C23.4694 34.9417 24.85 38.9667 26.7167 43.4ZM69.7667 85.75C72.9556 87.2278 76.4167 88.4333 80.15 89.3667C83.8833 90.3 87.5 90.8444 91 91V78.5167L78.9833 76.0667L69.7667 85.75Z"
                fill="#263238" />
            </svg>
            <div className="texto-card-form">
              <h2 className="mb-0">Mande mensagem</h2>
              <p className="paragrafo mb-0">Entre em contato para o número (00) 00000-0000 e espere um de nossos atendentes responder a sua dúvida.</p>
            </div>
          </div>
          
          <div className="card-form">
            <svg width="100" height="100" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 98C19.075 98 17.4273 97.3144 16.0568 95.9432C14.6856 94.5727 14 92.925 14 91V42C14 34.2222 16.7222 27.6111 22.1667 22.1667C27.6111 16.7222 34.2222 14 42 14H70C77.7778 14 84.3889 16.7222 89.8333 22.1667C95.2778 27.6111 98 34.2222 98 42V91C98 92.925 97.3148 94.5727 95.9443 95.9432C94.5731 97.3144 92.925 98 91 98H21ZM21 91H91V42C91 36.1667 88.9583 31.2083 84.875 27.125C80.7917 23.0417 75.8333 21 70 21H42C36.1667 21 31.2083 23.0417 27.125 27.125C23.0417 31.2083 21 36.1667 21 42V91ZM36.225 52.4312C34.6306 50.8297 33.8333 48.9047 33.8333 46.6562C33.8333 44.4076 34.6341 42.4861 36.2355 40.8917C37.8369 39.2972 39.7619 38.5 42.0105 38.5C44.2591 38.5 46.1806 39.3007 47.775 40.9022C49.3694 42.5036 50.1667 44.4286 50.1667 46.6772C50.1667 48.9257 49.3659 50.8472 47.7645 52.4417C46.1631 54.0361 44.2381 54.8333 41.9895 54.8333C39.7409 54.8333 37.8194 54.0326 36.225 52.4312ZM64.225 52.4312C62.6306 50.8297 61.8333 48.9047 61.8333 46.6562C61.8333 44.4076 62.6341 42.4861 64.2355 40.8917C65.8369 39.2972 67.7619 38.5 70.0105 38.5C72.2591 38.5 74.1806 39.3007 75.775 40.9022C77.3694 42.5036 78.1667 44.4286 78.1667 46.6772C78.1667 48.9257 77.3659 50.8472 75.7645 52.4417C74.1631 54.0361 72.2381 54.8333 69.9895 54.8333C67.7409 54.8333 65.8194 54.0326 64.225 52.4312ZM33.8333 91V78.1667C33.8333 76.2417 34.5189 74.5936 35.8902 73.2223C37.2606 71.8519 38.9083 71.1667 40.8333 71.1667H71.1667C73.0917 71.1667 74.7398 71.8519 76.111 73.2223C77.4814 74.5936 78.1667 76.2417 78.1667 78.1667V91H71.1667V78.1667H59.5V91H52.5V78.1667H40.8333V91H33.8333Z"
                fill="#263238" />
            </svg>
            <div className="texto-card-form">
              <h2 className="mb-0">Robô Virtual</h2>
              <p className="paragrafo mb-0">Seja atendido pelo nosso chatbot para dúvidas rápidas e de fácil resolução.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sac;