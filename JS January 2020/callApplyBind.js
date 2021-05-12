// call function assigns object to this keyword

const person = {
    fullName : function(){
        return this.firstName + " "+ this.lastName
    }
}

const person1 = {firstName: "John", lastName: "Doe"}
const person2 = {firstName: "Bela", lastName: "Szalai"}

console.log(person.fullName.call(person1));  // John Doe
console.log(person.fullName.call(person2));  // Bela Szalai

// Arrow function cannot reference to this keyword


// apply method can take argument as an array

const obj = {name: "Bela"};

let greeting = function(a, b){
    return `${a} ${this.name}. ${b}`
};

console.log(greeting.apply(obj, ['Hello', 'How are you?']))
// Hello Bela. How are you?


/**
 * apply can be used to find max number
 */

const numbers = [1, 200, 93, 44, 5, 6]

console.log(Math.max.apply(null, numbers));  // 200


// bind method creates new bound function which wraps the original function

const developer = {name: 'Gary'};

let message = function (a, b) {
    return `${a} ${this.name}. ${b}`
}

let bound = message.bind(developer);

console.log(bound("Hello", "How are you?"));
// Hello Gary. How are you?