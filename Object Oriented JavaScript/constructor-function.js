function Hero(name, role){
    this.name = name;
    this.role = role;

    this.introduce = function(){
        console.log(`My name is ${this.name}. I am ${this.role}.`);
    }
}

// same constructor function can be used to create different objects
const youngabi = new Hero("Youngabi", 'mother');

const ignatius = new Hero("Ignatius", 'athlete');

console.log(youngabi.role);
console.log(ignatius.name);

youngabi.introduce();

ignatius.introduce();

console.log(typeof ignatius);           // object

console.log(youngabi instanceof Hero);  // true