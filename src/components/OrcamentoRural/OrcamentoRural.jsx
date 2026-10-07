import { useState } from "react";
import "./OrcamentoRural.css";

function OrcamentoRural() {
  const [cultura, setCultura] = useState("");
  const [area, setArea] = useState("");
  const [sementes, setSementes] = useState("");
  const [fertilizantes, setFertilizantes] = useState("");
  const [defensivos, setDefensivos] = useState("");
  const [maquinas, setMaquinas] = useState("");
  const [maoDeObra, setMaoDeObra] = useState("");
  const [outros, setOutros] = useState("");
  const [resultado, setResultado] = useState(null);

  function numero(valor) {
    return Number(valor) || 0;
  }

  function calcularOrcamento() {
    const areaNum = numero(area);

    if (!cultura || areaNum <= 0) {
      alert("Selecione uma cultura e informe uma área válida.");
      return;
    }

    const total =
      numero(sementes) +
      numero(fertilizantes) +
      numero(defensivos) +
      numero(maquinas) +
      numero(maoDeObra) +
      numero(outros);

    const custoPorHectare = total / areaNum;

    setResultado({
      total,
      custoPorHectare,
    });
  }

  function dinheiro(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <main className="orcamento-rural">

      <section className="orcamento-cabecalho">
        <h1>Orçamento Rural</h1>
        <p>
          Calcule uma estimativa dos custos da sua produção de forma
          rápida e personalizada.
        </p>
      </section>

      <section className="orcamento-card">

        <div className="orcamento-campos">

          <div className="orcamento-campo">
            <label>CULTURA</label>

            <select
              value={cultura}
              onChange={(e) => setCultura(e.target.value)}
            >
              <option value="">Selecione a cultura</option>
              <option value="soja">Soja</option>
              <option value="milho">Milho</option>
              <option value="cafe">Café</option>
              <option value="trigo">Trigo</option>
              <option value="algodao">Algodão</option>
              <option value="arroz">Arroz</option>
              <option value="feijao">Feijão</option>
            </select>
          </div>

          <div className="orcamento-campo">
            <label>ÁREA PLANTADA (HA)</label>

            <input
              type="number"
              placeholder="Ex: 100"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div className="orcamento-campo">
            <label>SEMENTES (R$)</label>

            <input
              type="number"
              placeholder="Ex: 15000"
              value={sementes}
              onChange={(e) => setSementes(e.target.value)}
            />
          </div>

          <div className="orcamento-campo">
            <label>FERTILIZANTES (R$)</label>

            <input
              type="number"
              placeholder="Ex: 25000"
              value={fertilizantes}
              onChange={(e) => setFertilizantes(e.target.value)}
            />
          </div>

          <div className="orcamento-campo">
            <label>DEFENSIVOS (R$)</label>

            <input
              type="number"
              placeholder="Ex: 12000"
              value={defensivos}
              onChange={(e) => setDefensivos(e.target.value)}
            />
          </div>

          <div className="orcamento-campo">
            <label>MÁQUINAS E EQUIPAMENTOS (R$)</label>

            <input
              type="number"
              placeholder="Ex: 18000"
              value={maquinas}
              onChange={(e) => setMaquinas(e.target.value)}
            />
          </div>

          <div className="orcamento-campo">
            <label>MÃO DE OBRA (R$)</label>

            <input
              type="number"
              placeholder="Ex: 10000"
              value={maoDeObra}
              onChange={(e) => setMaoDeObra(e.target.value)}
            />
          </div>

          <div className="orcamento-campo">
            <label>OUTROS CUSTOS (R$)</label>

            <input
              type="number"
              placeholder="Ex: 5000"
              value={outros}
              onChange={(e) => setOutros(e.target.value)}
            />
          </div>

        </div>

        <button
          className="orcamento-botao"
          onClick={calcularOrcamento}
        >
          Calcular Orçamento
        </button>

        {resultado && (
          <div className="orcamento-resultado">

            <h2>Resumo do orçamento</h2>

            <div className="orcamento-resultado-grid">

              <div>
                <span>Custo total estimado</span>
                <strong>
                  {dinheiro(resultado.total)}
                </strong>
              </div>

              <div>
                <span>Custo por hectare</span>
                <strong>
                  {dinheiro(resultado.custoPorHectare)}
                </strong>
              </div>

            </div>

          </div>
        )}

      </section>

    </main>
  );
}

export default OrcamentoRural;