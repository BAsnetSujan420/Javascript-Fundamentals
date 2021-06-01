const num1 = '1234567890';
const num2 = '123-456-7890';
const num3 = '123 456 7890';
const num4 = '(123) 456-7890';
const num5 = '+977 123 456 7890';

// match 10 digits numbers
const matchNumber4 = /\d{3}\d{3}\d{4}/;

matchNumber4.test(num1); // true

// match 10 digits numbers having dash and space
const matchNumber3 = /\d{3}[ -]?\d{3}[ -]?\d{4}/;

matchNumber3.test(num1); // true
matchNumber3.test(num2); // true
matchNumber3.test(num3); // true


