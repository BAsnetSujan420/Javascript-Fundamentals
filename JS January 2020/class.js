class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    greeting(msg) {
        return `${msg}, my name is ${this.firstName} ${this.lastName} and I am ${this.age}.`
    }
}

let person1 = new Person("Florin", "Pop", 25);

console.log(person1.firstName);       // Florin

console.log(person1.getFullName());    // Florin Pop

console.log(person1.age);              // 25

console.log(person1.greeting('Hello')); 
// Hello, my name is Florin Pop and I am 25.

