/**
 * Tipos de dados no JavaScript
 * 
 *  JavaScript é uma linguagem de tipagem dinâmica, no decorrer do programa
 * as variaveis podem mudar o seu tipo.
 * 
 *  As variaveis em JavaScript podem ser do tipo PRIMITIVO
 * Referência: [MDN Estrutura de dados](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures)
 */

console.log(typeof true);       //Boolean - entidade lógica true ou false
console.log(typeof null);       //Null - valor nulo
console.log(typeof variable);   //Undefined - variavel de valor não atribuido
console.log(typeof 10);         //Number - tipo númerico que double-precision 64-bit, que representa valor inteiros ou decimais entre -(2ˆ53 - 1) a (2ˆ53 -1)
console.log(typeof BigInt(90)); //BigInt - tipo númerico para valor em ponto flutuante
console.log(typeof 'texto');    //String - representa dados textuais

//Template String
console.log(`String declarada "` `" que permite a execução de código JS.\n A soma 2 + 2 é igual a ${2+2}`);