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