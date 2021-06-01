// Strings

const str1 = "hello";
const str2 = "world";
const str3 = "hello world";
const str4 = "Hello World";
const str5 = "YouTube is Awesome!";

// RegEx patterns
const rg1 = new RegExp("hello");
const rg2 = /world/;
const rg3 = /hello world/i;
const rg4 = /(hello) (world)/i;
const rg5 = /YouTube/;


// Tests

const test1 = rg1.test(str1);  // true
const test2 = rg2.test(str2);  // true
const test3 = rg1.test(str3);  // true
const test4 = rg2.test(str3);  // true
const test5 = rg2.test(str4);  // false
const test6 = rg3.test(str4);  // true

// search return index when found
const test7 = str3.search(rg2);
console.log(test7);             // 6


// match returns array of matched string and group
const test8 = str3.match(rg2);
console.log(test8);            //  [ 'world', index: 6, input: 'hello world', groups: undefined ]

const test9 = str4.match(rg4);
console.log(test9);            // [ 'Hello World','Hello', 'World', index: 0,input: 'Hello World',groups: undefined ]

// replace method
const test10 = str5.replace(rg5, "codeSTACKr");
console.log(test10);  // codeSTACKr is Awesome!
console.log(str5);    // YouTube is Awesome!