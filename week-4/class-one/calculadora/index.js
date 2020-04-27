const calculadora = require("./calculator")
const prompt = require('prompt-sync')()

function options(){
    console.log(`
        1 - Somar
        2 - Subtrair
        3 - Multiplicar
        4 - Dividir
        0 - Sair 
    `)
}

function optionSelected(option){
    
    let value1 = Number(prompt('Qual o primeiro valor? '));
    let value2 = Number(prompt('Qual o segundo valor? '));

    switch (Number(option)){
        case 1:
            return calculadora.somar(value1,value2);
        case 2:
            return calculadora.subtração(value1,value2);
        case 3:
            return calculadora.multiplicação(value1,value2);
        case 4:
            return calculadora.divisão(value1,value2);
    }
}

const pergunta = prompt('Qual o seu nome? ')
console.log(`Bem vind@ a calculadora ${pergunta}`);

let option;
while(option != 0){
    options();
    option = prompt(`Qual a opção? `);

    if(option == 0){
        break
    }

    console.log(optionSelected(option));
    
    
};


