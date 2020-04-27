/**
 * Acompanhando a video aula hora do código do terceiro módulo
 */

 function add(a,b){
     return a+b;
    //  return `A soma de ${a} e ${b} é igual a ${a+b}`;
}

// console.log(add(2,2));

function sub(a,b){
    return a - b;
    // return `A subtração de ${a} e ${b} é igual a ${a-b}`;
}

// console.log(sub(4,2));


function multi(a,b){
    return a*b;
    //return `A multiplicação de ${a} e ${b} é igual a ${a*b}`;
}

// console.log(multi(3,5));

function div(a,b){
    return b == 0 ? 0 : a/b;
    //return b == 0 ? `A divisão de ${a} e ${b} é igual a ${0}` : `A divisão de ${a} e ${b} é igual a ${a/b}`;
}

// console.log(div(10,0));

//Modularizando o codigo com nodejs
module.exports = {
    somar: add,
    subtração: sub,
    multiplicação: multi,
    divisão: div
};
