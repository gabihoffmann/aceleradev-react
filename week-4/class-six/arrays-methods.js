/**
 * Métodos de array
 * 
 * MAP - percorre todo o array e retorna um novo array 
 * de mesmo tamanho
 * 
 * FILTER - filtro dado uma condição vai retornas as que forem true
 * 
 * REDUCE - reduzir o array a um unico valor
 */

 const numbers = [1,2,3,4,5];
 var double = x => 2*x;
 const doubleNumbers = numbers.map(double);
 console.log(doubleNumbers)


const animais = ['passaro','vaca','gato','cachorro'];
objectAnimal = animais.map((animal,index) => {
    return {
        nome: animal,
        numero: index
    }
});

console.log(objectAnimal);

console.log(objectAnimal.filter((animal) => {
        return animal.numero %2 == 0 
    })
);


animaisPeso = objectAnimal.reduce((initialValue, animal) =>{
    return initialValue+=animal.numero
},0)

console.log(animaisPeso);