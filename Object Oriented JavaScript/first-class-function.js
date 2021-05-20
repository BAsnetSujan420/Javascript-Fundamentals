// function can be stored in variables
const result = function average(a, b, c){ return (a + b + c)/2; }(3,4,7);
console.log(result);


// function can return function
const returnFunction = function(){
    return function(){
        console.log("Hello from function inside of function.");
    }
}

console.log(returnFunction()());


// function can be passed as arguments into another function
function callAndAdd(num, callback){
    return num + callback();
}

function returnThree(){
    return 3;
}

const res = callAndAdd(30, returnThree);

console.log(res);   // 33


// Higher Order Functions - Array Methods

const favoriteFlavors = ['cookie dough', 'salted caramel', 'toffee'];

favoriteFlavors.forEach(function(flavor) {
  // debugger;
  console.log('I enjoy ' + flavor + ' ice cream!');
});


const names = ['David', 'Richard', 'Veronika'];

const nameLengths = names.map(function(name) {
  return name.length;
});

const shortNames = names.filter(function(name) {
  return name.length < 6;
});

console.log(nameLengths);  // [ 5, 7, 8 ]

console.log(shortNames);   // [ 'David' ]