const arr = [1, [2, [3, [4]]]]; 

const res = arr.flat();

console.log(res); // [ 1, 2, [ 3, [ 4 ] ] ]

const res2 = arr.flat(3);

console.log(res2);  // [ 1, 2, 3, 4 ]


//flat method can be used to convert multi-dimensional array into 1D array
const arr2 = [1, [2, [4, 5, [6, 7, [8, 9, [12]]]]]];

const flattened = arr2.flat(Infinity);

console.log(flattened); 
// [ 1, 2, 4,  5, 6, 7, 8, 9, 12 ]
