class Person {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
}

class developer extends Person{
    constructor(firstName , lastName , role){
        super(firstName , lastName);
        this.role = role;
    }
    
}
    
const mario = new developer("Mario", "Rossi", "Front-end");
const gabriele = new Person("Gabriele" , "Provenzano" , "Full-stack");
console.log(gabriele);
console.log(mario);