/**
 * Função são blocos fundamentais em JavaScript e são definidos como um conjunto de instruções que executam uma determinada tarefa
 * Para declarar uma função: 
 *  function nomeDaFunção(argumentos,parametro){ corpo da função }
 * ArrowFunction é sintaxe mais curta pra declarar funções
 * 
 */

 //declaração da função
 function soma(a,b){
        return a + b;
}

//chamando a função
console.log(soma(2,3));

//ArrowFunction
//const sub = (a,b) => { return a - b}
const sub = (a,b) =>  a - b ;

console.log(sub(4,2));


