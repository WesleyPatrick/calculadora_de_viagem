const form = document.querySelector("form");
const resultados = document.querySelector(".resultados");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const viagem = document.querySelector("#viagem").value;
  const km = document.querySelector("#km").value;
  const litros = document.querySelector("#litros").value;
  const valor = document.querySelector("#valor").value;

  const kmPorLitro = km / litros;
  const custoViagem = km * valor;
  const custoPorKm = custoViagem / km;

  document.querySelector("#viagem-resultado").textContent = viagem;
  document.querySelector("#km-percorridos-resultado").textContent = km;
  document.querySelector("#litros-gastos-resultado").textContent = litros;
  document.querySelector("#km-por-litro-resultado").textContent = kmPorLitro;
  document.querySelector("#custo-viagem-resultado").textContent = custoViagem;
  document.querySelector("#custo-por-km-resultado").textContent = custoPorKm;

  resultados.style.display = "block";
});