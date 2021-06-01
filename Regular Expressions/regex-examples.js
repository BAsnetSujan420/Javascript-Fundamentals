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


/**
 * Password Validation
 * force password to contain a capital letter, lowercase letter, number and minimum of 8 characters
 *  */ 

const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g

const res1 = "1sMyPasswordOK?".search(pass);
console.log(res1); // 0

const res2 = "fireship".search(pass);
console.log(res2);  // -1


/**
 * Hex Codes
 * analyze color scheme in document matching hex value of color
 */

 const hex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g

 const res3 = "color: #ffffff; color: #000000;".match(hex);
 console.log(res3);  // [ '#ffffff', '#000000' ]

 const res4 = "color: rgb(0,0,255); color: hsl(280, 50%, 20%);".match(hex);
 console.log(res4);  // null


/**
 * Remove HTML Tags
 * find and replace all the HTML tags
 */

 const tags = /(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>)/g

 const sanitized = "<h1>Hello World</h1>".replace(tags, '');

 console.log(sanitized);  // Hello World

