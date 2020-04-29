/**
 * call, apply e bind são métodos de FUNCTION que alteram o valor de THIS de quem os invoca
 * 
 * call(argumentoThis, args1, args2,...)
 * o primeiro parâmetro de call é o valor que será atribuido ao this (o contexto)
 * os demais parametros sao para a função que invoca o metodo call.
 * 
 * apply(argumentoThis, [array, de ,argumentos])
 * Assim como call o primeiro parametro é o contexto de THIS e o segundo é um array de parametros
 * 
 * bind não executa uma função, mas retorna uma outra com um novo contexto
 * 
 * Isso permite criar funções genericas e ela sabera trabalhar com qualquer objeto
 */

let User = {
    name: "User",
    lastName: "LastName",
    sayMyName: function(){
        return `My name is ${this.name}`;
    }
}

let sayEntireName = function(num1,num2){
    return `Meu nome é ${this.name} ${this.lastName} e os números ${num1}, ${num2}`
}
console.log(sayEntireName.call(User,13,24));
console.log(sayEntireName.apply(User,[11,12]));
let myName = sayEntireName.bind(User,16,17);
console.log(myName());


/**
 * Função dentro de outra função acessando o THIS de outro contexto
 */

 let showLoggedUser = function(){
     let sayName = function(){
         return `My name is ${this.name}` // sayName tem o contexto de showLogged
     }

     return `O usuári logado é: ${sayName.call(this)}`
 }

console.log(showLoggedUser.call(User));//showLogged tem o contexto de User

/**
 * ArrowFunction o contexto de this é definido pelo contexto de execução onde está inserido
 */

 let otherShow = function(){
     let sayName = () => {
         return `My arrow name is ${this.name}`
     }
     return `O usuário logado: ${sayName()}`
 }

 console.log(otherShow.call(User));