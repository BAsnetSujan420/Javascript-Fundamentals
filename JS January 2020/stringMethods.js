// All string methods are accessor methods as stings(primary data type) are immutable

const msg = 'Subscribe to CodeSTACKr!';

// length property
console.log(msg.length);  // 24

// indices, indexOf(), lastIndexOf() methods
console.log(msg.indexOf('Sub'));  // 0
console.log(msg.indexOf('R'));    // -1
console.log(msg.indexOf('s'));    // 3
console.log(msg.lastIndexOf('S')); // 17

// startsWith() & endsWith() methods
console.log(msg.startsWith('sub'));  // false
console.log(msg.endsWith('Kr!'));    // true

// includes() method
console.log(msg.includes('code'));  // false
console.log(msg.includes('STACK')); // true

// slice() method
console.log(msg.slice(3, 9));     // scribe
console.log(msg.slice(13));       // CodeSTACKr
console.log(msg.slice(-11, -7));  // Code

// substring() method does not take negative value
console.log(msg.substring(7));  //  be to CodeSTACKr!

// split() method
console.log(msg.split(' '));  //  [ 'Subscribe', 'to', 'CodeSTACKr!' ]

// repeat() method
console.log(msg.repeat(3));  // Subscribe to CodeSTACKr!Subscribe to CodeSTACKr!Subscribe to CodeSTACKr!

// concat() method
console.log(msg.concat(' Thank You!!!'));  // Subscribe to CodeSTACKr! Thank You!!!

// uppercase & lowercase
console.log(msg.toUpperCase());   //  SUBSCRIBE TO CODESTACKR!
console.log(msg.toLowerCase());   //  subscribe to codestackr!

// trim() method
console.log(msg.trim());     //  Subscribe to CodeSTACKr!

//match() Method
console.log(msg.match(/[A-Z]/g));  // [ 'S', 'C', 'S','T', 'A', 'C', 'K' ]

//padStart() & PadEnd() methods
const num = "2345";
console.log(num.padStart(10, '.'));    //  ......2345
console.log(num.padEnd(10, '.'));     //  2345......
