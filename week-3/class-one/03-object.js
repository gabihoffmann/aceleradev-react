/**
 *  Dados não primitivos no JavaScript
 * 
 *  Objetos são coleções de dados referenciados pelo seu nome e que possuem um valor
 *  var objeto = {chave : valor}, até mesmo uma função
 */


 var pessoa = {
     name: "Ana",
     age: 17,
     email: "email@email.com",
     phone: "3333-4444",
     login: () => 'OK'
 }

console.log(pessoa.name);
console.log(pessoa);
console.log(pessoa.login());
