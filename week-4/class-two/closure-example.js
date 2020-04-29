
function pai(){
    var x = 1;
    function filho(){
        console.log(x); //pela definição do escopo filho tem acesso a variavel x de pai
        x++;
    }
    return filho; // pai retorna filho como referência

    /* A função filho possui uma referência ao escopo da função pai,
     e a essa referência nós damos o nome de closure. */
}

var contador = pai(); 
/** ao executar pai, o retorno que é filho é atribuido  a variavel 
 * contador que agora persiste e os dados não são coletados pelo garbage colletor da engine' */
contador(); //1
contador(); //2
contador(); //3