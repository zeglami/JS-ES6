class Human {
    constructor(){
        this.age=28;
    }


    printAge(){
        console.log(this.age)
    }
}


class Person extends Human{
    constructor(){
        super();
        this.name="Abdel";
    }


    printName(){
        console.log(this.name)
    }
}


const person=new Person();
person.printName()
person.printAge()