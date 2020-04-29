/**
 * O JavaScript possibilita trabalhar com ações assicronas
 * exemplo: consumir API, leitura de arquivo, chamar informação do banco
 * 
 * Com promises um objeto pode produzir um valor em algum momento no futuro
 * Exitem estados da promisse:
 *  Pending: estado inicial, não foi realizada e nem rejeitada
 *  Fulfilled: suceso na operação
 *  Rejected: falha na operação
 *  Settled:foi realizada ou rejeitada
 */

 function api(email, password){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            password === 123456 ?
            resolve(console.log(`O usuário ${email} está logado`)):
            reject(console.log(`Senha invalida`))
        }, 5000);
    });
 }

 let response = api('henrique@gmail.com', 123457).then((value)=>{
     return value
 }).catch((erro)=> {
     return console.log(`Digite novamente, ${erro}`)
 });
console.log(response);
