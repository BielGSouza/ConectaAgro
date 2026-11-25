import '../css/footer.css'
import FTGabriel from '../assets/fotosCriadores/Gabriel.jpg'
import FTFelipe from '../assets/fotosCriadores/Felipe.jpg'
import FTHariel from '../assets/fotosCriadores/Hariel.jpg'
import FTMike from '../assets/fotosCriadores/Mike.jpg'
import FTMatheus from '../assets/fotosCriadores/Matheus.jpg'

const Footer = () => {
  return (
    <footer>
      <div className="footer d-flex flex-column align-items-center">
        <div className="d-flex gap-1">
          <p className="mb-0 Exo-2 text-uppercase fw-bold c-367588">conecta</p>
          <p className="mb-0 Exo-2 text-uppercase fw-bold c-2F5D50">agro</p>
        </div>
        <p className="p-copy mb-0">&copy; ConectaAgro. Todos os direitos reservados.</p>
      </div>
      <div className="compFooter d-flex flex-column align-items-center justify-content-center gap-3">
        <div className="d-flex justify-content-center w-100">
          <div className="criadores d-flex">
            <div className="card-criador">
              <img 
                src={FTFelipe}
                alt="Foto do Felipe, um dos criadores da ConectaAgro." 
                width="140"
              />
              <div className="d-flex flex-column align-items-center">
                <p className="mb-0 fw-bold p-card-criadores-nome">Felipe Matos</p>
                <p className="mb-0 p-card-criadores-rm">RM568892</p>
              </div>
            </div>

            <div className="card-criador">
              <img 
                src={FTGabriel}
                alt="Foto do Gabriel, um dos criadores da ConectaAgro." 
                width="140"
              />
              <div className="d-flex flex-column align-items-center">
                <p className="mb-0 fw-bold p-card-criadores-nome">Gabriel de Souza</p>
                <p className="mb-0 p-card-criadores-rm">RM571035</p>
              </div>
            </div>

            <div className="card-criador">
              <img 
                src={FTHariel}
                alt="Foto do Hariel, um dos criadores da ConectaAgro." 
                width="140"
              />
              <div className="d-flex flex-column align-items-center">
                <p className="mb-0 fw-bold p-card-criadores-nome">Hariel Santos</p>
                <p className="mb-0 p-card-criadores-rm">RM570145</p>
              </div>
            </div>

            <div className="card-criador">
              <img 
                src={FTMike}
                alt="Foto do Mike, um dos criadores da ConectaAgro."
                width="140"
              />
              <div className="d-flex flex-column align-items-center">
                <p className="mb-0 fw-bold p-card-criadores-nome">Mike Roberson</p>
                <p className="mb-0 p-card-criadores-rm">RM570333</p>
              </div>
            </div>

            <div className="card-criador">
              <img 
                src={FTMatheus}
                alt="Foto do Matheus, um dos criadores da ConectaAgro." 
                width="140"
              />
              <div className="d-flex flex-column align-items-center">
                <p className="mb-0 fw-bold p-card-criadores-nome">Matheus Marques</p>
                <p className="mb-0 p-card-criadores-rm">RM574122</p>
              </div>
            </div>
          </div>
        </div>
        <p className="p-copy mb-0">PBL Agrotech FIAP ON 2026</p>
        <a 
          href="https://www.youtube.com/watch?v=B1WoIHm3nVo" 
          id="link-video-pitch"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link para o Pitch Video!
        </a>
      </div>
    </footer>
  )
}

export default Footer