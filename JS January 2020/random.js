// Random number between 1 and 10

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);


//Random number between specified ranges

const randomGenerator = (min, max) => {
return Math.floor(Math.random()*(max-min+1)) + min;
};

console.log(randomGenerator(5,14));
