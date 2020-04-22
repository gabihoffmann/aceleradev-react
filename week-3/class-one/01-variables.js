/* 
    Entendendo a diferença entre 
    VAR, LET e CONST no JavaScript

    referência: [Artigo Alura](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript)
                [Tabela const,let,var](http://www.constletvar.com/const-vs-let-vs-var.png)
    */


var verificaVarNoEscopo = function(){

    var texto1DentroDaFuncao = "var declarado na função";
    let texto2DentroDaFuncao = "let declarado na função";
     

    if(true){
        var texto1DentroDoIf = "var declarado no if";
        let texto2DentroDoIf = "let declarado no if";
        console.log(texto1DentroDoIf);
        console.log(texto2DentroDoIf);
    }

    console.log(texto1DentroDoIf);
    // console.log(texto2DentroDoIf); // --> Uncaught ReferenceError: 

    console.log(texto1DentroDaFuncao);
    console.log(texto2DentroDaFuncao);
}

verificaVarNoEscopo();

/**
 * Hoisting - No JavaScript toda VAR é levada para o topo do escopo antes da execução do código
 * por isso mesmo fora do IF obteve acesso a VAR declarada dentro do IF
 * VAR é de "escopo global"
 * 
 * Para lidar com isso o ECMAScript6 trouxe a flexibilização das variaves com o LET
 * que são declaradas dentro do escopo do bloco. Quando tentamos acessar uma LET fora
 * do seu escopo apresenta o erro Uncaught ReferenceError:varible is not defined
 * 
 * */

 var funcaoConstante =  function(){
     const constante = "Texto constante";
     console.log(constante);
     // constante = "novo texto"; // --> Uncaught TypeError: Assignment to constant variable.
 }

 funcaoConstante();

 /**
  *  Para lidar com variaveis do tipo UNDEFINED (tipo de dado em JS), 
  *  a declaração como CONST impede que a variavel seja reatribuida e indefinida
  * 
  */