// bundling multiple elements into an array
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;

console.log(total, subtotal, tax, items);


//variadic function that take an indefinite number of arguments
function calculateAverage(...numbers) {
    let total = 0;  
    for(const num of numbers) {
      total += num;
    }
    return total / numbers.length;
  }

console.log(calculateAverage(1, 2));
console.log(calculateAverage(10, 36, 84, 90, 110));
console.log(calculateAverage(-23, 3000, 575000));