// closure gives access to anything outside of current scope

// Self invoking function and closure as counter
const add = (function () {
    let counter = 0;   //emulate private variable
    return () => {counter++; return counter}
})();

console.log(add());   // 1
console.log(add());   // 2
console.log(add());   // 3
console.log(add());   // 4