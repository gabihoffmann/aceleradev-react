function mathModule(){
    var x = 0;

    function somaUm(){
        x++;
        console.log(x);
    };
    
    function subtraiUm(){
        x--;
        console.log(x);
    };

    return {
        somaUm: somaUm,
        subtraiUm: subtraiUm
    };
    /**
     * A função mathModule retornar um objeto com referências para as funções internas somaUm e subtraiUm
     */
}

var teste = mathModule(); /** ao executar a função mathModule  criasse o escopo interno e as closures*/
teste.somaUm();
teste.somaUm();
teste.somaUm();
teste.subtraiUm();
/**
 * Como a variável x também é persistente, graças à closure.
 * Sempre que chamamos pelas funções somaUm e subtraiUm 
 * dentro do nosso módulo, o valor dela será alterado, sem ser reiniciado.
 */

console.log(x); 
/** A variável x não pode ser acessada fora do escopo de mathModule, já que ela é privada.
 * Mensagem do erro: ReferenceError: x is not defined at Object.<anonymous>
 */