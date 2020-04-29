class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    getName(){
        console.log(this.name)
    }

    getAge(){
        console.log(this.age)
    }

}

let user = new User('João', 10);
user.getAge();
user.getName();