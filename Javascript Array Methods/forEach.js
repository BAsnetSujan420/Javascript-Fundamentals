const numbers = [1, 2, 3, 4, 5]

// forEach method can access each element, index and array
numbers.forEach((item, index) => {
    console.log(`numbers[${index}] : ${item}`);
});


// Example : letter count

const letters  = ['p', 'r', 'o', 'c', 'c', 'e', 's', 's', 'e', 'd']

let count = {};

letters.forEach(item => {
    if(count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
});

console.log(count);      //  { p: 1, r: 1, o: 1, c: 2, e: 2, s: 2, d: 1 }

