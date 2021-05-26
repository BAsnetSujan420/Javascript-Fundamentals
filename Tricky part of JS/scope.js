const vegetable = 'carrot';
let value;

if(hoisted) {
  var fruit = 'apple';
}

if(!hoisted) {
  var fruit = 'banana';
}


function addTenToNum(num) {
  var ten = 10;
  value = ten + num;
}

addTenToNum(5);


console.log('1: ', hoisted);
console.log('2: ', fruit);
console.log('3: ', value);
console.log('5: ' , vegetable);
console.log('4: ', ten);
var hoisted = true;