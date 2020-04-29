/**
 * Invocar o this no escopo global retorna todo o Window Object, 
 * isso porque é o objeto que inicializa todo o código 
 */
console.log(this); // Nesse momento retorna objeto vazio nesse escopo não há objeto

/**
 * o this tem acesso as variaveis e funções desse objeto 
 */
let user = {
    name: "User",
    lastName: "LastName",
    sayMyName: function(){
        return `My name is ${this.name}`;
    }
}
console.log(user.sayMyName());

/**
 * Essa função está em outro escopo,
 * logo não consegue acessar o escopo de user
 */
let sayEntireName = function(){
    return `Meu nome é ${this.name} ${this.lastName}`
}
console.log(sayEntireName());

