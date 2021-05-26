// variable with var declaration is hoisted at top

console.log(char);    // undefined
var char = 'a';


//function is hoisted with its declaration and definition

console.log(squareNumber(4));    // 16
function squareNumber(num) {
  return num **2;
}

// function expression is hoisted without its definition

timeFn(function() {
    for(let i = 0; i < 100; i++) { }
  });
  
  // This function accepts a function and logs the time it takes for the function to execute.
  const timeFn = function(fn) {
    const beginTime = performance.now();
    fn();
    const endTime = performance.now();
    console.log('Time took: ', endTime - beginTime);
  }