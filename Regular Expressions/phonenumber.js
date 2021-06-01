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

// match 10 digits numbers with group
const matchNumber2 = /(?<first>\d{3})[ -]?(?<second>\d{3})[ -]?(?<third>\d{4})/;

const friendNum = num1.match(matchNumber2); 
console.log(friendNum);  // groups: [Object: null prototype] { first: '123', second: '456', third: '7890'}

// match 10 digits number with area and international code
const matchNumber = /((\+1)[ -])?\(?(?<areacode>\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/;

matchNumber.test(num1); // true
matchNumber.test(num2); // true
matchNumber.test(num3); // true
console.log(matchNumber.test(num4)); // true
console.log(matchNumber.test(num5)); // true
