/* 
  - Call Stack
  - Pilha de chamada

  - FIFO = First in First Out
  - Primeiro que entra é primeiro que sai, como em uma ordem de fila.
  - Ex: <-1<-2<-3 / <-2<-3 / <-3

  - LIFO = Last In First Out
  - Ultimo que entra é o primeiro que sai
  - JS funciona em LIFO
  - Um faz referencia ao outro
*/

function funcao1() {
  funcao2();
  console.log("Função 1 foi chamada");
}

function funcao2() {
  funcao3();
  console.log("Função 2 foi chamada");
}
function funcao3() {
  console.log("Função 3 foi chamada");
}

funcao1();
