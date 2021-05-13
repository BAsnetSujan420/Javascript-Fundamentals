const numbers = [1, 2, 3 ,5, 6]

//find returns element if found and undefined if not found
const res = numbers.find(num => num == 7);

console.log(res);  // undefined


// Example : finding Florin and printing details
const people = [
    {   name:'Florin',
        age: 25,
        language : 'Javascript' 
    },
    {   name: 'Evan',
         age: 22  
        },
    {   name: 'Liam',
        age: 18 
    }]

const details = people.find(findFlorin);

function findFlorin(person) {
    return person.name === "Florin";
}

console.log(`${details.name} is ${details.age} and uses ${details.language}.`);
// Florin is 25 and uses Javascript.
