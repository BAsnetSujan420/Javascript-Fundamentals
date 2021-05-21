function Dog(age, weight, name){
    this.age = age;
    this.weight = weight;
    this.name = name;
}

// add method to prototype
Dog.prototype.bark = function () {
    console.log(`${this.name} says woof!`);
};

dog1 = new Dog(2, 60, 'Java');

dog2 = new Dog(4, 55, 'Jodi');

// Object linked to method via prototype
dog1.bark();

dog2.bark();

// All the array methods are inherited from prototype when called on


