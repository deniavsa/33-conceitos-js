/* 
  - Expressão e Declaração
  - Expressão retorna apenas um valor
  - A decalaração ela pode mudar além de fazer mais de uma cosia

*/

console.log(1 + 1);
console.log(Math.random() + 5);

function expressao() {
  return 1 + 1;
}

console.log(expressao());

var variavel = 20;

if (true) {
  variavel = 30;
}

function soma(a) {
  return a + 10;
}

console.log(soma(Math.random()));
