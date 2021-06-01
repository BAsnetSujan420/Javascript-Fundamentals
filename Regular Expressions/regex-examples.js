/**Common Example for Regular Expression*/

/**Alphanumeric value with space */

const alpha = /^[a-z\d\-_\s]+$/i;
const ex1 = '3435 df 345'.match(alpha);
console.log(ex1);       // [ '3435 df 345', index: 0, input: '3435 df 345', groups: undefined ]
const ex2 = 'star*234 Bucks'.match(alpha);
console.log(ex2);      // null

/*** Email Address Validation*  */ 

const email = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/i;
const ex3 = 'try that sujanb094@gmail.com'.match(email);
console.log(ex3);   // [ 'sujanb094@gmail.com', index: 0, input: 'sujanb094@gmail.com', groups: undefined ]
const ex4 = 'fly @top'.match(email);
console.log(ex4);   // null

/** * URL Validation*/

const url = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)({\/:?=&#]{1}[\da-z\.-]+)*[\/\/?]?$/;
const ex5 = 'https://facebook.com'.match(url);

console.log(ex5);        // [ 'https://facebook.com', 'https://', 'facebook.com', undefined, index: 0, input: 'https://facebook.com', groups: undefined ]

