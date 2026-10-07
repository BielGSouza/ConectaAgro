import { useState } from "react";
import "./SimuladorCredito.css";

function SimuladorCredito() {
  const [valor, setValor] = useState("");
  const [taxa, setTaxa] = useState("");
  const [prazo, setPrazo] = useState("");
  const [resultado, setResultado] = useState(null);

  function simular() {
    const principal = Number(valor);
    const jurosAnual = Number(taxa) / 100;
    const meses = Number(prazo);

    if (!principal || !jurosAnual || !meses) {
      return;
    }

    const jurosMensal = Math.pow(1 + jurosAnual, 1 / 12) - 1;

    // Sistema Price
    const parcela =
      principal *
      (jurosMensal * Math.pow(1 + jurosMensal, meses)) /
      (Math.pow(1 + jurosMensal, meses) - 1);

    const total = parcela * meses;
    const jurosTotal = total - principal;

    setResultado({
      parcela,
      total,
      jurosTotal,
    });
  }

  function dinheiro(numero) {
    return numero.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <main className="simulador">
      <section className="cabecalho">
        <h1>Simulador de Crédito Rural</h1>
        <p>
          Simule as condições do seu financiamento rural de forma rápida
          e simples.
        </p>
      </section>

      <section className="card">
        <div className="campos">

          <div className="campo">
            <label>FINALIDADE DO CRÉDITO</label>
            <select>
              <option>Selecione a finalidade</option>
              <option>Custeio</option>
              <option>Investimento</option>
              <option>Comercialização</option>
              <option>Industrialização</option>
            </select>
          </div>

          <div className="campo">
            <label>VALOR DO FINANCIAMENTO (R$)</label>
            <input
              type="number"
              placeholder="Ex: 100000"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <div className="campo">
            <label>TAXA DE JUROS (% A.A.)</label>
            <input
              type="number"
              step="0.01"
              placeholder="Ex: 8"
              value={taxa}
              onChange={(e) => setTaxa(e.target.value)}
            />
          </div>

          <div className="campo">
            <label>PRAZO (MESES)</label>
            <input
              type="number"
              placeholder="Ex: 60"
              value={prazo}
              onChange={(e) => setPrazo(e.target.value)}
            />
          </div>

        </div>

        <button onClick={simular}>
          Simular Crédito
        </button>

        {resultado && (
          <div className="resultado">
            <h2>Resultado da simulação</h2>

            <div className="resultadoGrid">
              <div>
                <span>Parcela estimada</span>
                <strong>{dinheiro(resultado.parcela)}</strong>
              </div>

              <div>
                <span>Total de juros</span>
                <strong>{dinheiro(resultado.jurosTotal)}</strong>
              </div>

              <div>
                <span>Total a pagar</span>
                <strong>{dinheiro(resultado.total)}</strong>
              </div>
            </div>
          </div>
        )}

      </section>
    </main>
  );
}

export default SimuladorCredito;