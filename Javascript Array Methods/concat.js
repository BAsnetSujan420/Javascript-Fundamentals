const a = [1, 2, 3]
const b = [5, 6]
const c = [7, 8, 9]

const d = a.concat(b, c);

console.log(d);  //  [ 1, 2, 3, 5, 6, 7, 8, 9 ]

// concat makes shallow copy
const bCopy = b.concat();

b.push(0);

console.log(bCopy);   // [ 5, 6 ]
console.log(b);       // [ 5, 6, 0 ]

// adding new elements with concat method

const x = d.concat(10, 11, 12, 13, a);

console.log(x);  // [ 1, 2,  3,  5,  6,  7, 8, 9, 10, 11, 12, 13, 1, 2,  3 ]
  
