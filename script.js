let alt = document.getElementById("altura1");
let pes = document.getElementById("peso1");
let botao = document.querySelector("button");
let div = document.getElementById('mostraResultado')
function calculaImc(altura, peso) {
  return peso / (altura * altura);
}
alt.focus();
pes.focus();

botao.addEventListener("click", function () {
  let imc = calculaImc(alt.value, pes.value);
  if (imc >= 18 && imc < 35) {
  div.innerHTML=`<p>seu imc é de ${Math.round(imc)} .Esta excelente PARABÉNS!!!!!</p>`
   } else if (imc < 18.5) {
    div.innerHTML = "<p>Você esta abaixo do peso!</p>";
  } else if (imc > 35) {
    div.innerHTML = "<p>Você esta acima do peso!!</p>";
  }
  alt.value = "";
  pes.value = "";
});
