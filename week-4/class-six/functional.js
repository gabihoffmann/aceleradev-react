/**
 * JavaScript funcional
 * Conceitos e exemplos da programação funcional
 * escrever funções puras e remover side-effects é a base da Programação Funcional
 */

//#Função pura - dada a mesma entrada retorna a mesma saida
//Os inputs e outputs não geram efeitos colaterais
function somar(num1, num2){
    return num1 + num2;
}
 console.log(somar(2,5));
 console.log(somar(2,5));// apresentam a mesma saida

 //#Composição de funções
 //Combinação de funções para produzir uma nova função ou realizar uma computação
 // f(g(x))
 // A função multiplicar é uma composição de somas
 function multi(num1,num2){
     let result = 0
     for(let i = 0 ; i < num2 ; i++){
         result = somar(result, num1);
     }
     return result;
 }
 console.log(multi(3,2));

 //#Estado compartilhado
 // qualquer espaço da memória que existe em um escopo compartilhado
 //

 //#Imutabilidade
 //Objeto que não pode ser modificado apos de criado, isso evita
 // que algum valor alterado cause problemas em outros lugares

 //#High Order Function
 //São funções que operam sobre outras, ou recebendo como parâmetro ou retornando
 // Isso permite abstrair valores ou ações

 function calculate(fn,x,y){
     return fn(x,y);
 }

 console.log(calculate(somar,2,5));
 console.log(calculate(multi,5,2));

//ES6
const sum = (x,y) => x+y;
console.log(calculate(sum,5,5))

// HighOrder callback example
function nome(callback){ //função nome recebe uma função
    let name = "React";
    callback(name); //printName(name = "React")
}

function printName(name){
    console.log(`Meu nome é ${name}`)
}

nome(printName);