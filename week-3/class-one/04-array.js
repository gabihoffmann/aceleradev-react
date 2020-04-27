/**
 * Array - vetores
 *  São objetos do tipo lista que não possuem tipo fixo e podem ser alterados
 * 
 * Referência: [Array MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
 */

var fruits = ['banana','maçã']
var vetor = ['casa' , 12 , {nome: 'react'}];

//propriedades de vetores
fruits.push('laranja'); //inserir mais um elemento no vetor
console.log(fruits.indexOf('banana')); //buscar pelo indice do elemento
fruits.forEach(fruta => console.log(fruta));

console.log(fruits.length); //verificar o comprimento do vetor
console.log(fruits[1]); // acessando o valor armazenado na posição 1

