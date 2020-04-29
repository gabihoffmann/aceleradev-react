/**
 * JavaScript Orientado a Objetos
 */

 class Person{
     //Constructor
     constructor(name,age,job){
        this.name = name
        this.age = age
        this.job = job
     }

     //Methods
     sayHello(){
         console.log(`Ola, meu nome é ${this.name}`)
     }

     //GETTERS
     get sayAge(){
         console.log(`Minha idade é ${this.age}`)
     }
     //SETTERS
     set setAge(newAge){
         this.age = newAge
     }
 }

 //instanciando um objeto
 let user = new Person('Maria', 25, 'dev');
 console.log(user.name);
 user.sayHello();
 user.sayAge;
 user.setAge = 10;
 user.sayAge;

 //Extends
 class User extends Person{
    constructor(name,age,job,email){
        super(name,age,job)
        this.email = email
    }

     sayUser(){
         //Super
        super.sayHello();
        console.log(`Sou o usuario ${this.name} e meu email é ${this.email}`)
     }

     
 }

 let newUser = new User('Ana', 29, 'job', 'email@email')
 newUser.sayUser();