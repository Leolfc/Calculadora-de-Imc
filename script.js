let alt = document.getElementById("altura1");
let pes = document.getElementById("peso1");
let botao = document.querySelector("button");

function calculaImc(altura, peso) {
  return peso / (altura * altura);
}
alt.focus();
pes.focus();

botao.addEventListener("click", function () {
  let imc = calculaImc(alt.value, pes.value);
  if (imc >= 18 && imc < 35) {
    alert(`seu imc é de ${Math.round(imc)} .Esta excelente PARABÉNS!!!!!`);
  } else if (imc < 18.5) {
    alert("Você esta abaixo do peso!");
  } else if (imc > 35) {
    alert("Você esta acima do peso!!");
  }
  alt.value = "";
  pes.value = "";
});
