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



// this keyword refers to object itself, it is used to invoke object method and properties
function City(name, population) {
    this.name = name;
    this.population = population;
  
    this.identify = function () {
      console.log(`${this.name}'s population is ${this.population}.`);
    };

    this.update = function (more) {
        this.population += more;
    }
  }

// this keyword is set to newly created object
const sanFrancisco = new City('San Francisco', 870000);

sanFrancisco.update(103000);

sanFrancisco.identify();    //  San Francisco's population is 973000.