// normal function

function multiply(a, b) {
    return a * b;
}

console.log (multiply(2, 5));  // 10


//Immediately Invoked Function Expression

(function multiply(a, b){
    return a * b;
})(2, 5);  // 10


// let keyword is locally scoped

let name = "Pasha";

{
    let name = 'Benj';
    console.log(name); // Benj
}

console.log(name); // Pasha
