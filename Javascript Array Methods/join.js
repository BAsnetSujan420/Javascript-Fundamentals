const countries = ['Japan', 'Poland', 'Korea', 'Turkey']

const res = countries.join();
console.log(res);   // Japan,Poland,Korea,Turkey

const res2 = countries.join(" - ");
console.log(res2);   //  Japan - Poland - Korea - Turkey



const res3 = countries.join(", ");

console.log("Hello my friends from " + res3);
//  Hello my friends from Japan, Poland, Korea, Turkey

const name =  ['B', 'a', 'r', 't', 'c', 'h', 'a', 'n', 'g']

const hero = name.join("");
console.log(hero);           //  Bartchang
