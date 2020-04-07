/* 
  - Escopo global, de função, do bloco e léxico

*/

//Lexico
var nome = "Denilson";

function teste() {
  var sobrenome = "Sobrenome";
  if ((sobrenome = "Sobrenome")) {
    const valor = 10;
  }
  console.log(valor);
}

teste();

//Global
var a = 0;
function alterar() {
  a = 10;
}
console.log(a);
alterar();
console.log(a);

//Função

// igual escopo lexico

// Bloco

function bloco() {
  var teste;
  if (true) {
    teste = "teste";
    let teste2 = "teste2";
  }
  console.log(teste);
  console.log(teste2);
}

bloco();
